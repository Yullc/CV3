package com.example.CV3.repository;

import com.example.CV3.vo.table;
import org.apache.ibatis.annotations.Mapper;
import java.util.List;

@Mapper
public interface tableRepository {

    List<table> findByType(String type);
}