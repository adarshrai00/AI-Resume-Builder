package org.example.ai_resume_builder.controller;


import org.example.ai_resume_builder.ResumeRequest;
import org.example.ai_resume_builder.service.ResumeService;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.Map;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/resume")
public class ResumeController {
    @Autowired
    private  ResumeService resumeService;


    @PostMapping("/genereate")
    public ResponseEntity< Map<String,Object>> getResumeData(

            @RequestBody ResumeRequest resumeRequest
            ) throws IOException {
                    Map<String,Object> response = resumeService.generateResumeResponse(resumeRequest.userDescription());
                    return new ResponseEntity<>(response, HttpStatus.OK);
                }
}























