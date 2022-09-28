package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Vehicle;

@Repository
public interface IVehicleDao extends JpaRepository<Vehicle, Long>{
//	@Query("update Vehicle v set v.status=UNAVAILABLE where v.vehicleId=?1")
//	@Modifying
//	Vehicle updateVehicleStatus(Vehicle vehicle);
	
//	@Query("select v from Vehicle v where v.city=:city v.categoryName=:categoryName")
	List<Vehicle> findByCityAndCategoryName(@Param("city") String city, @Param("categoryName") String categoryName);
	
	List<Vehicle> findByCityAndCategoryNameAndStatus(@Param("city") String city, @Param("categoryName") String categoryName,String status);
//	@Query("select v from Vehicle v where v.status=?1")
//	List<Vehicle> getVehicles(Status status);
	
	List<Vehicle> findAllVehiclesByStatus(String string);

	Vehicle findByVehicleId(Long vehicleId);

	Vehicle getByVehicleId(Long vehicleId);
	


	

	


//	List<Vehicle> findAllVehiclesByCategory(String categoryName);


	
}
