package com.azbj.proposalde3.service;

import com.azbj.proposalde3.repository.ProposalFormRepository;
import com.azbj.proposalde3.model.ProposalForm;
import com.azbj.proposalde3.model.RiderDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ProposalFormService {

    @Autowired
    private ProposalFormRepository proposalFormRepository;

    public boolean exitProposalForm(String applicationNumber, String callFormName) {
        try {
            proposalFormRepository.deleteFromAzbjCpMerge(applicationNumber);
            proposalFormRepository.deleteFromAzbjCpMergeRequest(applicationNumber);
            proposalFormRepository.updateAzbjPhubTracker(applicationNumber);
            if (!"NEW_BBU".equals(callFormName)) {
                // Logic to delete images from the specified directory
            }
            return true;
        } catch (Exception e) {
            // Handle exception
            return false;
        }
    }

    public String fetchImagePath(String formName) {
        String imagePath = proposalFormRepository.getImagePath(formName);
        if ("NEW_BBU".equals(formName)) {
            // Adjust the image path from a server path to a local path
        }
        return imagePath;
    }

    public List<ProposalForm> getProposalDetails() {
        return proposalFormRepository.findAll();
    }

    public void saveProposal(ProposalForm proposalData) {
        proposalFormRepository.save(proposalData);
    }

    public boolean validateProposal(ProposalForm proposalData) {
        return proposalFormRepository.validate(proposalData);
    }

    public void updatePreviousPolicyDetails(Object previousPolicyDetails) {
        proposalFormRepository.save(previousPolicyDetails);
    }

    public List<String> getImagePaths(String applicationNumber) {
        List<String> imagePaths = proposalFormRepository.findImagePathsByApplicationNumber(applicationNumber);
        // Logic to copy images to the local temporary directory and open them
        return imagePaths;
    }

    public List<RiderDetails> getRiderDetails() {
        return proposalFormRepository.findAllRiderDetails();
    }

    public void addRiderDetail(RiderDetails riderDetail) {
        proposalFormRepository.save(riderDetail);
    }

    public void deleteRiderDetail(Long riderDetailId) {
        proposalFormRepository.deleteById(riderDetailId);
    }

    public void populateRiderDetails() {
        proposalFormRepository.populateRiderDetails();
    }

    public void populateRecords(String parameter) {
        if ("D1".equals(parameter)) {
            // Populate records with 'D1'
        } else if ("D2".equals(parameter)) {
            // Populate records with 'D2'
        }
    }

    public void populateDE2Records(String param) {
        proposalFormRepository.populateDE2Records(param);
    }

    public boolean validateProposalForm(ProposalForm proposalForm) {
        // Perform various validation checks on the proposal form data
        return proposalFormRepository.validateProposalForm(proposalForm);
    }

    public Object fetchImage(String proposalType, String currentBlock, String currentItem) {
        return proposalFormRepository.findImage(proposalType, currentBlock, currentItem);
    }

    public int getStripNumber(String blockName, String fieldName, String proposalType) {
        return proposalFormRepository.getStripNumber(blockName, fieldName, proposalType);
    }

    public String getFileName(int stripNumber, String proposalType) {
        return proposalFormRepository.getFileName(stripNumber, proposalType);
    }

    public Object fetchImageData(String currentBlock, String currentItem, String proposalType) {
        return proposalFormRepository.fetchImageData(currentBlock, currentItem, proposalType);
    }

    public int fetchMaxStripNumber(String currentBlock, String currentItem, String proposalType) {
        return proposalFormRepository.fetchMaxStripNumber(currentBlock, currentItem, proposalType);
    }

    public List<String> getProposalFormFields() {
        return proposalFormRepository.getProposalFormFields();
    }

    public void saveProposalRecord(ProposalForm proposalRecord) {
        proposalFormRepository.save(proposalRecord);
    }

    public void deleteProposalRecord(Long proposalRecordId) {
        proposalFormRepository.deleteById(proposalRecordId);
    }

    public void recheckProposalRecord(Long proposalRecordId) {
        proposalFormRepository.recheckById(proposalRecordId);
    }

    public String getMasterPolicyNumber(String applicationNumber) {
        return proposalFormRepository.findMasterPolicyNumber(applicationNumber);
    }

    public int countSystemConstants(String masterPolicyNumber) {
        return proposalFormRepository.countSystemConstants(masterPolicyNumber);
    }

    public List<String> fetchFundDetails(String productCode, String saDateRecd) {
        return proposalFormRepository.getFundDetails(productCode, saDateRecd);
    }

    public String fetchProposalType(String applicationNo) {
        return proposalFormRepository.findProposalTypeByApplicationNo(applicationNo);
    }
}