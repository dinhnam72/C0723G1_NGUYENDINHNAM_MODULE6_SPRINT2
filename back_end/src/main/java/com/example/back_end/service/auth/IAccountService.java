package com.example.back_end.service.auth;

import com.example.back_end.model.Account;

import java.util.Optional;

public interface IAccountService {
    /**
     * Finds an account by username.
     * @author: NamND
     * @date: 19/02/2024
     * @param username The username.
     * @return An optional containing the account if found, or an empty optional if not found.
     */
    Optional<Account> findByUsername(String username);


//    Boolean existsByEmail(String email);

    void updatePassword(Account account);
    /**
     * Get Account By Email.
     * @author: NamND
     * @date: 10/01/2024
     * @param account The account to be saved.
     * @return account if true, otherwise null
     */
    Account addAccount(Account account);
    void addAccountRole (int idAccount,int idRole);


}
