package org.rygn.kanban.domain;

import java.time.LocalDateTime;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;
import lombok.ToString;

@Data
@Entity
public class ChangeLog {

	private @Id @GeneratedValue Long id;
	
	private LocalDateTime occured;
	
	@ManyToOne
	@JsonIgnoreProperties("changeLogs")
	@ToString.Exclude	
	private Task task;
	
	@ManyToOne
	private TaskStatus targetStatus;
	
	@ManyToOne
	private TaskStatus sourceStatus;
	
	public ChangeLog() {
	}

	/**
	 * @return the id
	 */
	public Long getId() {
		return id;
	}

	/**
	 * @return the occured
	 */
	public LocalDateTime getOccured() {
		return occured;
	}

	/**
	 * @return the task
	 */
	public Task getTask() {
		return task;
	}

	/**
	 * @return the targetStatus
	 */
	public TaskStatus getTargetStatus() {
		return targetStatus;
	}

	/**
	 * @return the sourceStatus
	 */
	public TaskStatus getSourceStatus() {
		return sourceStatus;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(Long id) {
		this.id = id;
	}

	/**
	 * @param occured the occured to set
	 */
	public void setOccured(LocalDateTime occured) {
		this.occured = occured;
	}

	/**
	 * @param task the task to set
	 */
	public void setTask(Task task) {
		this.task = task;
	}

	/**
	 * @param targetStatus the targetStatus to set
	 */
	public void setTargetStatus(TaskStatus targetStatus) {
		this.targetStatus = targetStatus;
	}

	/**
	 * @param sourceStatus the sourceStatus to set
	 */
	public void setSourceStatus(TaskStatus sourceStatus) {
		this.sourceStatus = sourceStatus;
	}
}
