package com.example.CV3.controller;

import com.example.CV3.service.memberService;
import com.example.CV3.vo.member;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/usr/home")
public class memberController {

    @Autowired
    private memberService memberService;

    @PostMapping("/doLogin")
    public String doLogin(HttpServletRequest req,
                          @RequestParam(name = "loginId", required = false) String loginId,
                          @RequestParam(name = "loginPw", required = false) String loginPw) {

        if (loginId == null || loginId.trim().isEmpty()) {
            return "F-1: 아이디를 입력해주세요.";
        }
        if (loginPw == null || loginPw.trim().isEmpty()) {
            return "F-2: 비밀번호를 입력해주세요.";
        }

        member member = memberService.getMemberByLoginId(loginId);
        if (member == null) {
            return "F-3: 존재하지 않는 아이디입니다.";
        }

        boolean isMatched = memberService.checkPassword(member, loginPw);
        if (!isMatched) {
            return "F-4: 비밀번호가 일치하지 않습니다.";
        }

        HttpSession session = req.getSession();
        session.setAttribute("loginedMember", member);
        System.out.println("hello");
        return "S-1: " + member.getName() + "님 환영합니다!";
    }
}