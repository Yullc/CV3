package com.example.CV3.vo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class table {
    private Long id;
    private String title;
    private String category;
    private String broadcastTime;
    private String views;
    private String sales;
    private String revenue;
    private String productCount;
    private String type;
}