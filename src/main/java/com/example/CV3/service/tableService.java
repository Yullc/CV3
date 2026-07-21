package com.example.CV3.service;

import com.example.CV3.repository.tableRepository;
import com.example.CV3.vo.table;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class tableService {

    @Autowired
    private tableRepository tableRepository;

    public List<table> getTableDataByType(String type) {
        return tableRepository.findByType(type);
    }
}