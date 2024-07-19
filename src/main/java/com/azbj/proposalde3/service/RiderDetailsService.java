package com.azbj.proposalde3.service;

import com.azbj.proposalde3.repository.RiderDetailsRepository;
import com.azbj.proposalde3.model.RiderDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class RiderDetailsService {

    @Autowired
    private RiderDetailsRepository riderDetailsRepository;

    public RiderDetails loadRiderCover1SAData(Object context) {
        // Load data from an image file based on the provided context
        int v_strip_no = riderDetailsRepository.findMaxStripNo(context);
        RiderDetails riderDetails = new RiderDetails();
        // Assuming the image data is loaded into riderDetails object
        // Validate the data type
        if (!(riderDetails.getRiderCover1SA() instanceof Number)) {
            throw new IllegalArgumentException("RIDER_COVER1_SA must be a number");
        }
        return riderDetails;
    }

    public List<RiderDetails> fetchRiderDetails(String packageCode, String productCode) {
        List<RiderDetails> riderDetailsList = riderDetailsRepository.getRiderDetails(packageCode, productCode);
        // Apply business logic if needed
        return riderDetailsList;
    }

    public void deleteRiderDetails(Long riderId) {
        // Check necessary conditions and validations before performing the deletion
        riderDetailsRepository.deleteRiderDetails(riderId);
    }

    public void updateRiderDetails(Double sumAssured) {
        RiderDetails riderDetails = new RiderDetails();
        riderDetails.setSumAssured(sumAssured);
        riderDetailsRepository.save(riderDetails);
    }

    public void setPremiumTerm(Integer premiumTerm) {
        RiderDetails riderDetails = new RiderDetails();
        riderDetails.setPremiumTerm(premiumTerm);
        riderDetailsRepository.save(riderDetails);
    }

    public void deleteRiderDetailsByCoverCode(String coverCode) {
        riderDetailsRepository.deleteByCoverCode(coverCode);
    }

    public Integer getBenefitTerm() {
        RiderDetails riderDetails = riderDetailsRepository.findById(1L).orElse(null);
        return riderDetails != null ? riderDetails.getBenefitTerm() : null;
    }

    public List<RiderDetails> getRiderDetails() {
        return riderDetailsRepository.findRiderDetails();
    }

    public void updateRiderDetails(RiderDetails riderDetails) {
        riderDetailsRepository.saveRiderDetails(riderDetails);
    }

    public void deleteRiderDetails(Long riderId) {
        riderDetailsRepository.deleteById(riderId);
    }
}