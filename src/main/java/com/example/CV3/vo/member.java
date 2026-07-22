package com.example.CV3.vo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class member {
    private int id;
    private String loginId;
    private String password;
    private String name;

    public String getName() {
        return name;
    }

    public Object getPassword() {
        return password;
    }
}
