package com.example.back_end.config;


import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * The CorsConfig class is a @Configuration for CORS configuration
 * Implements WebMvcConfigurer to customize configuration
 * @author: NamND
 * @date: 10/01/2024
 */
public class CosConfig implements WebMvcConfigurer {
    /**
     * The addCorsMappings method configures CORS for the "/api/**" mappings.
     * @author: NamND
     * @date: 10/01/2024
     * @param registry CorsRegistry object for CORS configuration.
     */
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
                .allowedOrigins("http://localhost:3000")
                .allowedMethods("GET", "POST", "PUT", "DELETE","PATCH")
                .allowedHeaders("*");
    }
}
