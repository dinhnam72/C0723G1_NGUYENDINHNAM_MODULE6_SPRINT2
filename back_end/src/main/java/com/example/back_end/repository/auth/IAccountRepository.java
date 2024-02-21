package com.example.back_end.repository.auth;

import com.example.back_end.model.Account;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface IAccountRepository extends JpaRepository<Account,Integer> {
    @Query(value = "SELECT * FROM accounts as a WHERE a.username = :username", nativeQuery = true)
    Optional<Account> findByUsername(@Param("username") String username);
    @Query(value = "SELECT accounts.* FROM accounts WHERE username = :username", nativeQuery = true)
    Account getAccountByUsername(@Param("username") String username);
    @Transactional
    @Modifying
    @Query(value = "INSERT INTO accounts (username,password) " +
            "VALUES ( :#{#account.username}, :#{#account.password} ) ", nativeQuery = true)
    void addAccount(@Param("account") Account account);
    @Transactional
    @Modifying
    @Query(value = "INSERT INTO account_role (id_account,id_role) " +
            "VALUES ( :idAccount, :idRole ) ", nativeQuery = true)
    void addAccountRole(@Param("idAccount") int idAccount,@Param("idRole") int idRole);


    @Modifying
    @Transactional
    @Query(value = "UPDATE accounts SET password = :password WHERE username =:username",nativeQuery = true)
    void updatePasswordAccount(@Param("username") String username,@Param("password") String password);

}
