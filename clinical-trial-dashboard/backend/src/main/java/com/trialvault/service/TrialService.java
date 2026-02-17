package com.trialvault.service;

import com.trialvault.model.Trial;
import com.trialvault.repository.TrialRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class TrialService {

    private final TrialRepository repository;

    public TrialService(TrialRepository repository) {
        this.repository = repository;
    }

    public List<Trial> getAllTrials() {
        return repository.findAll();
    }

    public Trial createTrial(Trial trial) {
        return repository.save(trial);
    }
}
