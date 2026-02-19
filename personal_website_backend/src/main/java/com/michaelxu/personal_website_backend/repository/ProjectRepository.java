package com.michaelxu.personal_website_backend.repository;

import com.michaelxu.personal_website_backend.entity.Project;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProjectRepository extends JpaRepository<Project, Long> {

	List<Project> findAllByOrderByIdAsc();
}
