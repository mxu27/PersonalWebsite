package com.michaelxu.personal_website_backend.controller;

import com.michaelxu.personal_website_backend.entity.Project;
import com.michaelxu.personal_website_backend.repository.ProjectRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/projects")
public class ProjectController {

	private final ProjectRepository projectRepository;

	public ProjectController(ProjectRepository projectRepository) {
		this.projectRepository = projectRepository;
	}

	@GetMapping
	public List<Project> list() {
		return projectRepository.findAllByOrderByIdAsc();
	}

	@PostMapping
	public ResponseEntity<Project> create(@RequestBody Project project) {
		Project saved = projectRepository.save(project);
		return ResponseEntity.ok(saved);
	}
}
