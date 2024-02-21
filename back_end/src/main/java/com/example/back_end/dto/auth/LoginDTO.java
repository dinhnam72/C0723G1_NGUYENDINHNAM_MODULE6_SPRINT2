package com.example.back_end.dto.auth;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

public class LoginDTO implements Validator {
    @NotBlank(message = "Tên đăng nhập không được để trống.")
    @Pattern(regexp = "^\\w+$",message = "Tên đăng nhập không chứa ký tự đặc biệt.")
    @Size(min = 5,message = "Tên đăng nhập phải từ 5 kí tự")
    @Size(max = 20,message = "Tên đăng nhập phải ít hơn hoặc bằng 20 ký tự")
    private String username;

    @NotBlank(message = "Mật khẩu không được để trống.")
    @Pattern(regexp = "^\\w+$",message = "Mật khẩu không chứa ký tự đặc biệt.")
    @Size(min = 8,message = "Mật khẩu phải từ 8 kí tự")
    @Size(max = 20,message = "Mật khẩu phải ít hơn hoặc bằng 20 ký tự")
    private String password;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public boolean supports(Class<?> clazz) {
        return false;
    }

    @Override
    public void validate(Object target, Errors errors) {

    }
}
