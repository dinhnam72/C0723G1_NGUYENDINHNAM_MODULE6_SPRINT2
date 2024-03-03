package com.example.back_end.config;
import com.example.back_end.security.JwtAuthenticationFilter;
import com.example.back_end.service.auth.MyUserDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

/**
 * This class configures web security for the application.
 *
 * @author: NamND
 * @date: 19/02/2024
 */
@Configuration
@EnableWebSecurity
public class WebSecurityConfig {
    @Autowired
    private MyUserDetailService myUserDetailService;

    /**
     * Creates an authentication manager.
     *
     * @param authConfig The authentication configuration.
     * @return The authentication manager.
     * @throws Exception If an error occurs while creating the authentication manager.
     * @author: NamND
     * @date: 19/02/2024
     */
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authConfig) throws Exception {
        return authConfig.getAuthenticationManager();
    }

    /**
     * Creates a password encoder using BCrypt.
     *
     * @return The BCrypt password encoder.
     * @author: NamND
     * @date: 19/02/2024
     * @return The BCrypt password encoder.
     */
    @Bean
    public PasswordEncoder passwordEncoder() {

        return new BCryptPasswordEncoder();
    }

    /**
     * Creates a JWT authentication filter bean.
     *
     * @return The JWT authentication filter.
     * @author: NamND
     * @date: 19/02/2024
     */
    @Bean
    public JwtAuthenticationFilter authenticationJwtTokenFilter() {
        return new JwtAuthenticationFilter();
    }

    /**
     * Creates an authentication provider for DAO.
     *
     * @return The DAO authentication provider.
     * @author: NamND
     * @date: 19/02/2024
     * @return The DAO authentication provider.
     */
    @Bean
    public DaoAuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(myUserDetailService);
        authProvider.setPasswordEncoder(passwordEncoder());
        return authProvider;
    }

    /**
     * Configures security filters for HTTP requests.
     *
     * @param http The HTTP security configuration.
     * @return The built security filter chain.
     * @throws Exception If an error occurs while configuring the security filters.
     * @author: NamND
     * @date: 19/02/2024
     */
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .cors(Customizer.withDefaults())
                .authorizeHttpRequests((requests) -> requests
//                                .requestMatchers("/**").permitAll()
//                        Trang không cần đăng nhập
                                .requestMatchers("/api/login").permitAll()
                                .requestMatchers("/api/products/list").permitAll()
                                .requestMatchers("/api/customer/register").permitAll()
                                .requestMatchers("/api/products/details/**").permitAll()
                                .requestMatchers("/api/customer/**").permitAll()
                                .requestMatchers("/api/cart/**").permitAll()
                                .requestMatchers("/api/pay/**").permitAll()
                                .requestMatchers("/api/order/**").permitAll()
//                        Trang cần có quyền hợp lệ
//                                .requestMatchers("/api/products/admin").permitAll()
//                                .requestMatchers("/api/products/admin").hasAnyAuthority("ROLE_ADMIN")
                                .anyRequest().authenticated()
                )
                .csrf(AbstractHttpConfigurer::disable)
                .addFilterBefore(authenticationJwtTokenFilter(), UsernamePasswordAuthenticationFilter.class)
                .formLogin((form) -> form.disable())
                .logout((logout) -> logout.permitAll());


        return http.build();
    }
}
