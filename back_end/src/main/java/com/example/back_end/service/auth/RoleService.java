package com.example.back_end.service.auth;


import com.example.back_end.model.Role;
import com.example.back_end.repository.auth.IRoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RoleService implements IRoleService {
    @Autowired
    private IRoleRepository roleRepository;

    /**
     * This method finds a role by name.
     * @author: NamND
     * @date: 19/02/2024
     * @param role The name of the role.
     * @return An optional containing the role if found, or an empty optional if not found.
     */
    @Override
    public Optional<Role> findByRole(String role) {
        return roleRepository.findByRole(role);
    }

    @Override
    public List<Role> findRole() {
        return roleRepository.findAll();
    }
}
