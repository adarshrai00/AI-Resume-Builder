package org.example.ai_resume_builder.service;

import org.json.JSONObject;

import java.io.IOException;
import java.util.Map;
import java.util.Objects;

public interface ResumeService {

  Map<String, Object> generateResumeResponse(String userResumeDescription) throws IOException;
}
