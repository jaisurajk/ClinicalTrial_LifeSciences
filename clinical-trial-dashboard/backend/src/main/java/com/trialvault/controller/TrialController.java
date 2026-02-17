package com.trialvault.controller;

import com.trialvault.model.Trial;
import com.trialvault.service.TrialService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/trials")
@CrossOrigin(origins = "http://localhost:5173")
public class TrialController {

    private final TrialService service;

    public TrialController(TrialService service) {
        this.service = service;
    }

    @GetMapping
    public List<Trial> getAllTrials() {
        return service.getAllTrials();
    }

    @PostMapping
    public Trial createTrial(@RequestBody Trial trial) {
        return service.createTrial(trial);
    }
}
