package com.example.back_end.security;



import com.example.back_end.model.MyUserDetail;
import com.example.back_end.service.auth.MyUserDetailService;
import io.jsonwebtoken.*;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

/**
 * This class provides utility methods for JWT token generation, validation, and extraction.
 * @author: ThanhPV
 * @date: 12/10/2023
 */
@Component
public class JwtUtils {
    @Autowired
    private MyUserDetailService myUserDetailService;
    private static final String SECRET_KEY = "======================C0723G1===========================";
    private static final long EXPIRE_TIME = 86400000L;


    /**
     * This method creates a JWT token using the provided user principal.
     * @author: NamND
     * @date: 10/01/2024
     * @param userPrincipal The user principal.
     * @return The JWT token.
     */
    public String createToken(MyUserDetail userPrincipal) {
        String jwt = generateTokenFromUsername(userPrincipal.getUsername());
        return jwt;
    }

    private Key key() {

        return Keys.hmacShaKeyFor(Decoders.BASE64.decode(SECRET_KEY));
    }

    /**
     * This method generates a JWT token from the provided username.
     * @author: NamND
     * @date: 19/02/2024
     * @param username The username.
     * @return The JWT token.
     */
    public String generateTokenFromUsername(String username) {
//        Chuyển đổi role thành chuỗi token
        MyUserDetail myUserDetail = (MyUserDetail) myUserDetailService.loadUserByUsername(username);
        Map<String,Object> claims = new HashMap<>();
        claims.put("roles", myUserDetail.getAuthorities());

        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(new Date((new Date()).getTime() + EXPIRE_TIME))
                .signWith(key(), SignatureAlgorithm.HS256)
                .addClaims(claims)
                .compact();
    }

    /**
     * This method extracts the username from a JWT token.
     * @author: NamND
     * @date: 10/01/2024
     * @param token The JWT token.
     * @return The extracted username.
     */
    public String getUserNameFromJwtToken(String token) {
        return Jwts.parser().setSigningKey(key()).build()
                .parseClaimsJws(token).getBody().getSubject();
    }

    /**
     * This method validates a JWT token.
     * @author: NamND
     * @date: 10/01/2024
     * @param authToken The JWT token.
     * @return true if the token is valid, false otherwise.
     */
    public boolean validateJwtToken(String authToken) throws Exception {
        try {
            Jwts.parser().setSigningKey(key()).build().parse(authToken);
            return true;
        } catch (MalformedJwtException e) {
            throw new Exception("Token JWT không hợp lệ: " + e.getMessage());
        } catch (ExpiredJwtException e) {
            throw new Exception("Token JWT đã hết hạn: " + e.getMessage());
        } catch (UnsupportedJwtException e) {
            throw new Exception("Token JWT không được hỗ trợ: " + e.getMessage());
        } catch (IllegalArgumentException e) {
            throw new Exception("Token JWT không hợp lệ: " + e.getMessage());
        }
    }
}
