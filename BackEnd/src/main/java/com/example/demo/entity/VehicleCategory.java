package com.example.demo.entity;

import java.time.LocalDate;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="vehicle_category")
public class VehicleCategory {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@JsonProperty("cat_id")
	private Long categoryId;
	@Column(length = 30)
	private String categoryName;
	private Integer weeklyCharges;
	private Integer dailyCharges;
	private Integer lateCharges;
	
	
	public VehicleCategory() {
		super();
	}


	public VehicleCategory(Long categoryId, String categoryName, Integer weeklyCharges, Integer dailyCharges,
			Integer lateCharges) {
		super();
		this.categoryId = categoryId;
		this.categoryName = categoryName;
		this.weeklyCharges = weeklyCharges;
		this.dailyCharges = dailyCharges;
		this.lateCharges = lateCharges;
	}


	public Long getCategoryId() {
		return categoryId;
	}


	public void setCategoryId(Long categoryId) {
		this.categoryId = categoryId;
	}


	public String getCategoryName() {
		return categoryName;
	}


	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}


	public Integer getWeeklyCharges() {
		return weeklyCharges;
	}


	public void setWeeklyCharges(Integer weeklyCharges) {
		this.weeklyCharges = weeklyCharges;
	}


	public Integer getDailyCharges() {
		return dailyCharges;
	}


	public void setDailyCharges(Integer dailyCharges) {
		this.dailyCharges = dailyCharges;
	}


	public Integer getLateCharges() {
		return lateCharges;
	}


	public void setLateCharges(Integer lateCharges) {
		this.lateCharges = lateCharges;
	}


	@Override
	public String toString() {
		return "VehicleCategory [categoryId=" + categoryId + ", categoryName=" + categoryName + ", weeklyCharges="
				+ weeklyCharges + ", dailyCharges=" + dailyCharges + ", lateCharges=" + lateCharges + "]";
	}


	
	
	
	
	
}
