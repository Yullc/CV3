package com.example.CV3.repository;

import com.example.CV3.vo.member;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface memberRepository {

    member getMemberByLoginId(@Param("loginId") String loginId);
}