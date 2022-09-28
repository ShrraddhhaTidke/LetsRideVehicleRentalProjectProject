package com.example.demo.utils;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import com.example.demo.entity.Vehicle;
import com.example.demo.service.IVehicleService;
import com.example.demo.service.VehicleServieImpl;
import com.opencsv.CSVReader;
import com.opencsv.CSVReaderBuilder;
import com.opencsv.exceptions.CsvException;


public class DataUtils {
	private final static String CSV_FILE_NAME = "vehicle_data";
	private final static String CSV_FILE_PATH = System.getProperty("user.dir") + File.separator + "src" + File.separator
			+ "main" + File.separator + "resources" + File.separator + CSV_FILE_NAME
			+ ".xlsx";

//	public static void main(String[] args) throws Exception {
//		
//
//		List<Vehicle> list = getListsOfvehicles();
////		IVehicleService service = new VehicleServieImpl();
////		System.out.println(service.loadDatabase(list));
//		for (Vehicle vehicle : list) {
//			System.out.println(vehicle.toString());
//		}
//		
//	}

	public static List<Vehicle> readData() {
		List<Vehicle> vehicles = new ArrayList<Vehicle>();
		try {
			FileReader fileReader = new FileReader(new File(CSV_FILE_PATH));
			CSVReader csvReader = new CSVReaderBuilder(fileReader).withSkipLines(1).build();
			Vehicle vehicle = new Vehicle();
			List<String[]> allData = csvReader.readAll();
			for (String[] row : allData) {
//				vehicle.setVehicleId(row[0]);
				vehicle.setBrand(row[1]);
				vehicle.setModel(row[2]);
				vehicle.setMfgYear(row[3]);
				vehicle.setTransmission(row[4]);
				vehicle.setCategoryName(row[5]);
				vehicle.setFuel(row[6]);
				vehicle.setCappacity(row[7]);
				vehicle.setStatus(row[8]);
				vehicle.setCity(row[9]);
				vehicle.setImagePath(row[10]);
				vehicle.setRentPerDay(row[11]);

				vehicles.add(vehicle);
			}

		} catch (IOException | CsvException e) {
			e.printStackTrace();
		}
		return vehicles;
	}

	public static String handleStringConversion(Object object) {
		String value = null;

		if (object.equals(null))
			value = "0";
		else if (object instanceof Integer)
			value = String.valueOf(object);
		else
			value = object.toString();
		return value;
	}

	public static List<Vehicle> getListsOfvehicles() throws Exception {
		List<Vehicle> listOfvehicles = new ArrayList<Vehicle>();
		try {
			FileInputStream file = new FileInputStream(new File(CSV_FILE_PATH));
			Workbook workbook = new XSSFWorkbook(file);
			Sheet sheet = workbook.getSheet("vehicle_data");
			int numberOfRows = sheet.getLastRowNum();
			
			for (int i = 1; i <= numberOfRows; i++) {
				Vehicle vehicle = new Vehicle();
//				vehicle.setVehicleId(handleStringConversion(sheet.getRow(i).getCell(0).getStringCellValue()));
				vehicle.setBrand(handleStringConversion(sheet.getRow(i).getCell(1).getStringCellValue()));
				vehicle.setModel(handleStringConversion(sheet.getRow(i).getCell(2).getCellType() == CellType.NUMERIC
						? String.valueOf(sheet.getRow(i).getCell(2).getNumericCellValue())
						: sheet.getRow(i).getCell(2).getStringCellValue()));
				
				vehicle.setMfgYear(handleStringConversion(sheet.getRow(i).getCell(3).getCellType() == CellType.NUMERIC
						? String.valueOf(sheet.getRow(i).getCell(3).getNumericCellValue())
						: sheet.getRow(i).getCell(3).getStringCellValue()));
						
				vehicle.setTransmission(handleStringConversion(sheet.getRow(i).getCell(4).getStringCellValue()));
				vehicle.setCategoryName(
						handleStringConversion(sheet.getRow(i).getCell(5).getStringCellValue()));
				vehicle.setFuel(
						handleStringConversion(sheet.getRow(i).getCell(6).getStringCellValue()));
				vehicle.setCappacity(handleStringConversion(sheet.getRow(i).getCell(7).getCellType() == CellType.NUMERIC
						? String.valueOf(sheet.getRow(i).getCell(7).getNumericCellValue())
						: sheet.getRow(i).getCell(7).getStringCellValue()));
				vehicle.setStatus(
						handleStringConversion(sheet.getRow(i).getCell(8).getStringCellValue()));
				vehicle.setCity(handleStringConversion(sheet.getRow(i).getCell(9).getStringCellValue()));
				vehicle.setImagePath(
						handleStringConversion(sheet.getRow(i).getCell(10).getCellType() == CellType.NUMERIC
								? String.valueOf(sheet.getRow(i).getCell(10).getNumericCellValue())
										: sheet.getRow(i).getCell(10).getStringCellValue()));
				vehicle.setRentPerDay(
						handleStringConversion(sheet.getRow(i).getCell(11).getCellType() == CellType.NUMERIC
								? String.valueOf(sheet.getRow(i).getCell(11).getNumericCellValue())
										: sheet.getRow(i).getCell(11).getStringCellValue()));

				listOfvehicles.add(vehicle);
			}

			workbook.close();

		} catch (Exception e) {
			e.printStackTrace();
		}
		return listOfvehicles;

	}

}