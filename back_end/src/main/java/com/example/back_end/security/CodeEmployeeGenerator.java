package com.example.back_end.security;

import java.util.Random;

public class CodeEmployeeGenerator {
    private static final String PREFIX = "NV-";
    private static final String CHARACTERS = "123456789";

    public static String generateCode() {
        Random random = new Random();
        StringBuilder sb = new StringBuilder(PREFIX);

        for (int i = 0; i < 10 - PREFIX.length(); i++) {
            int index = random.nextInt(CHARACTERS.length());
            sb.append(CHARACTERS.charAt(index));
        }

        return sb.toString();
    }
}