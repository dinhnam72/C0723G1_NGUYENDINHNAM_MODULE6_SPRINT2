package com.example.back_end.service.auth;

//import com.example.back_end.model.auth.Account;
//import com.example.back_end.model.auth.MyUserDetail;
//import com.example.back_end.repository.auth.IAccountRepository;
import com.example.back_end.model.Account;
import com.example.back_end.model.MyUserDetail;
import com.example.back_end.repository.auth.IAccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

/**
 * This class implements the UserDetailsService interface for loading user details.
 */
@Service
public class MyUserDetailService implements UserDetailsService {
    @Autowired
    private IAccountRepository accountRepository;

    /**
     * This method loads user details by username.
     * @author: NamND
     * @date: 19/02/2024
     * @param username The username.
     * @return The user details of the specified username.
     * @throws UsernameNotFoundException If the username is not found.
     */
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Account account = accountRepository.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException("Username " + username + " không tồn tại"));
        return new MyUserDetail(account);

    }
}
