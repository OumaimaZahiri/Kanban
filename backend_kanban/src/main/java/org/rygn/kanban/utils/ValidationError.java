package org.rygn.kanban.utils;

import lombok.Data;

@Data
public class ValidationError {

	private String field;
	
	/**
	 * @return the field
	 */
	public String getField() {
		return field;
	}

	/**
	 * @return the message
	 */
	public String getMessage() {
		return message;
	}

	/**
	 * @param field the field to set
	 */
	public void setField(String field) {
		this.field = field;
	}

	/**
	 * @param message the message to set
	 */
	public void setMessage(String message) {
		this.message = message;
	}

	private String message;
	
	public ValidationError(String field, String message) {
		this.field = field;
		this.message = message;
	}
}
