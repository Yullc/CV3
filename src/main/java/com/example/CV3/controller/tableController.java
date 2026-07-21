package com.example.CV3.controller;

import com.example.CV3.service.tableService;
import com.example.CV3.vo.table;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class tableController {

    @Autowired
    private tableService tableService;

    @GetMapping("/api/table")
    public List<table> getTableData(@RequestParam("type") String type) {
        return tableService.getTableDataByType(type);
    }
}