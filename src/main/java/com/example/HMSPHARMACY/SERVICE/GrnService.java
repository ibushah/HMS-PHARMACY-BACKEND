package com.example.HMSPHARMACY.SERVICE;

import com.example.HMSPHARMACY.DTO.GrnDTO;
import com.example.HMSPHARMACY.DTO.UserTransactionsDTO;
import com.example.HMSPHARMACY.MODEL.Grn;
import com.example.HMSPHARMACY.MODEL.UserTransactions;
import com.example.HMSPHARMACY.REPOSITORY.CompanyRepository;
import com.example.HMSPHARMACY.REPOSITORY.GrnRepository;
import com.example.HMSPHARMACY.REPOSITORY.UserTransactionsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class GrnService {
    @Autowired
    GrnRepository grnRepository;

    @Autowired
    CompanyRepository companyRepository;

    @Autowired
    UserTransactionsService userTransactionsService;

    @Autowired
    UserTransactionsRepo userTransactionsRepo;

    @Transactional
    public ResponseEntity<String> postGrn(GrnDTO grnDTO){

            Grn grn = new Grn();
            grn.setCompany(grnDTO.getCompany());
            grn.setBonusQuantity(grnDTO.getBonusQuantity());
            grn.setBoxRate(grnDTO.getBoxRate());
            grn.setBoxTip(grnDTO.getBoxTip());
            grn.setDiscount(grnDTO.getDiscount());
            grn.setDiscountedAmount(grnDTO.getDiscountedAmount());
            grn.setInvoice(grnDTO.getInvoice());
            grn.setPacking(grnDTO.getPacking());
            grn.setReceivedBy(grnDTO.getReceivedBy());
            grn.setRequiredQuantity(grnDTO.getRequiredQuantity());
            grn.setProductName(grnDTO.getProductName());
            grn.setProductTotalAmount(grnDTO.getProductTotalAmount());
            grn.setStatus("Active");
            grn = grnRepository.save(grn);

            //saving grn transaction in user transactions
            userTransactionsService.saveUserTransactionsForGrn(grnDTO,grn.getId());
//        UserTransactions userTransactions = new UserTransactions();
//        userTransactions.setTransactionType("GRN");
//        userTransactions.setTransactionAmount(grn.getDiscountedAmount());
//        userTransactions.setTransactionDate(new Date());
//        userTransactions.setUserLoginInfo(userTransactionsDTO.getUserLoginInfo());
//        userTransactions.setTransactionBy(userTransactionsDTO.getUserLoginInfo().getEmail());


        return new ResponseEntity<String>("\"Grn successfully saved\"", HttpStatus.OK);
    }

    public List<Grn> getAllGrn(){
        List<Grn> grnList=grnRepository.findByStatus("Active");
        return grnList;

    }
    public ResponseEntity<String> deleteGrn(Long id){

        Grn grn=grnRepository.findById(id).get();
        if(grn!=null) {
            grn.setStatus("InActive");
            grnRepository.save(grn);
            return new ResponseEntity<String>("\"Drug formation  deleted successfully\"", HttpStatus.OK);
        }
        else {  return new ResponseEntity<String>("\"Grn  Not found\"", HttpStatus.NOT_FOUND);}
    }

    public ResponseEntity<String> updateGrn(Long id,GrnDTO grnDTO)
    {
        Optional<Grn> grn1=grnRepository.findById(id);
        if(grn1.isPresent()) {
            Grn grn=grn1.get();
            grn.setCompany(grnDTO.getCompany());
            grn.setBonusQuantity(grnDTO.getBonusQuantity());
            grn.setBoxRate(grnDTO.getBoxRate());
            grn.setBoxTip(grnDTO.getBoxTip());
            grn.setDiscount(grnDTO.getDiscount());
            grn.setDiscountedAmount(grnDTO.getDiscountedAmount());
            grn.setInvoice(grnDTO.getInvoice());
            grn.setPacking(grnDTO.getPacking());
            grn.setReceivedBy(grnDTO.getReceivedBy());
            grn.setRequiredQuantity(grnDTO.getRequiredQuantity());
            grn.setProductName(grnDTO.getProductName());
            grn.setProductTotalAmount(grnDTO.getProductTotalAmount());
            grn.setStatus("Active");
            grnRepository.save(grn);

            //updating user transactions
            updateUserTransactions(id, grnDTO);

            return new ResponseEntity<>("\"Grn updated successfully\"",HttpStatus.OK);
        }
        return new ResponseEntity<>("\"Grn  Not found\"",HttpStatus.NOT_FOUND);
    }
    public Grn getGrnById(Long id)
    {
       Optional<Grn> grn=grnRepository.findById(id);
       if(grn.isPresent())
           return grn.get();
       else
          return new Grn();

    }

    public void updateUserTransactions(Long id,GrnDTO grnDTO){
        UserTransactions userTransactions = userTransactionsRepo.findByRefId(id);
        if (userTransactions != null) {
            userTransactions.setTransactionAmount(grnDTO.getTransactionAmount());
            userTransactions.setTransactionDate(new Date());
            userTransactionsRepo.save(userTransactions);
        }

    }
}
