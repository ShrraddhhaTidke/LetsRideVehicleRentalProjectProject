package com.example.demo.dto;

import javax.persistence.Column;

import com.fasterxml.jackson.annotation.JsonProperty;

public class VehicleCategoryDTO {
	@JsonProperty("cat_id")
	private Long categoryId;
	private String categoryName;
	private Integer weeklyCharges;
	private Integer dailyCharges;
	private Integer lateCharges;
	
}
