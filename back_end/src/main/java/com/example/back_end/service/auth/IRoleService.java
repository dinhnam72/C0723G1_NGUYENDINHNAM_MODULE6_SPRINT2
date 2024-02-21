package com.example.back_end.service.auth;

import com.example.back_end.model.Role;


import java.util.List;
import java.util.Optional;

public interface IRoleService {
    /**
     * Finds a role by name.
     * @author: NamND
     * @date: 10/01/2024
     * @param role The name of the role.
     * @return An optional containing the role if found, or an empty optional if not found.
     */
    Optional<Role> findByRole(String role);
    List<Role> findRole();
}
