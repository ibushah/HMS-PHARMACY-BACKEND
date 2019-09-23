package com.example.HMSPHARMACY.SERVICE;

import com.example.HMSPHARMACY.DTO.SalesDTO;
import com.example.HMSPHARMACY.MODEL.BulkSave;
import com.example.HMSPHARMACY.MODEL.Sales;
import com.example.HMSPHARMACY.REPOSITORY.BulkSaveRepository;
import com.example.HMSPHARMACY.REPOSITORY.SalesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class SalesService {

    @Autowired
    SalesRepository salesRepository;

    @Autowired
    BulkSaveRepository bulkSaveRepository;

    public ResponseEntity<String> saveSales(List<SalesDTO> salesDTOList){

        List<Sales> sales = new ArrayList<>();
        Double total=0D;
        for(SalesDTO sale:salesDTOList)
            total = total + sale.getProductPrice();

        BulkSave bulkSave=new BulkSave();
        bulkSave.setCreatedAt(new Date());
        bulkSave.setCreatedBy("System");
        bulkSave.setTotal(total);
        BulkSave bulkSave1= saveBulk(bulkSave);
       

        salesDTOList.forEach(salesDto->{
            Sales sales1 = new Sales();
            sales1.setStatus("Active");
            sales1.setBulksave(bulkSave1);
            sales1.setProductQuantity(salesDto.getProductQuantity());
            sales1.setProductPrice(salesDto.getProductPrice());
            sales1.setProductName(salesDto.getProductRegistration().getProductName());
            sales1.setProductRegistrations(salesDto.getProductRegistration());
            sales.add(sales1);
        });
        salesRepository.saveAll(sales);



        return new ResponseEntity<String>("\"Sales successfully saved\"", HttpStatus.OK);
    }
    public  BulkSave saveBulk(BulkSave bulkSave)
    {

        bulkSaveRepository.save(bulkSave);

        return bulkSave;
    }
}
