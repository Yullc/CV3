package com.example.CV3.service;

import com.example.CV3.repository.memberRepository;
import com.example.CV3.vo.member;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class memberService {

    @Autowired
    private memberRepository memberRepository;

    public member getMemberByLoginId(String loginId) {
        return memberRepository.getMemberByLoginId(loginId);
    }

    public boolean checkPassword(member member, String loginPw) {
        if (member == null || loginPw == null) {
            return false;
        }
        return member.getPassword().equals(loginPw);
    }
}