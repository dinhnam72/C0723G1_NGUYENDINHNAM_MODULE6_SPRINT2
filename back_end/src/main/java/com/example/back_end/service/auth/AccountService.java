package com.example.back_end.service.auth;


import com.example.back_end.model.Account;
import com.example.back_end.repository.auth.IAccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class AccountService implements IAccountService {
    @Autowired
    private IAccountRepository accountRepository;

    /**
     * This method finds an account by username.
     * @author: NamND
     * @date: 19/01/2024
     * @param username The username.
     * @return An optional containing the account if found, or an empty optional if not found.
     */
    @Override
    public Optional<Account> findByUsername(String username) {
        return accountRepository.findByUsername(username);
    }

    @Override
    public void updatePassword(Account account) {
        accountRepository.updatePasswordAccount(account.getUsername(),account.getPassword());
    }


    @Override
    public Account addAccount(Account account) {
        try {
            accountRepository.addAccount(account);
           Account accountNew =  accountRepository.getAccountByUsername(account.getUsername());
            return accountNew;
        }catch (Exception e){
            return null;
        }
    }
    @Override
    public void addAccountRole(int idAccount,int idRole ) {
        try {
            accountRepository.addAccountRole(idAccount,idRole);
        }catch (Exception e){
            e.getMessage();
        }

    }

}
