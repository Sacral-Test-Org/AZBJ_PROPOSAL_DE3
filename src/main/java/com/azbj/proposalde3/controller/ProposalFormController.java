package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.service.ProposalFormService;
import com.azbj.proposalde3.model.ProposalForm;
import com.azbj.proposalde3.model.RiderDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/proposal")
public class ProposalFormController {

    @Autowired
    private ProposalFormService proposalFormService;

    @PostMapping("/exit")
    public ResponseEntity<String> exitProposalForm(@RequestParam String applicationNumber, @RequestParam String callFormName) {
        try {
            proposalFormService.exitProposalForm(applicationNumber, callFormName);
            return ResponseEntity.ok("Proposal form exited successfully.");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error exiting proposal form: " + e.getMessage());
        }
    }

    @GetMapping("/image-path")
    public ResponseEntity<String> getImagePath(@RequestParam String formName) {
        try {
            String imagePath = proposalFormService.fetchImagePath(formName);
            return ResponseEntity.ok(imagePath);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error fetching image path: " + e.getMessage());
        }
    }

    @GetMapping("/details")
    public ResponseEntity<ProposalForm> getProposalDetails() {
        try {
            ProposalForm proposalDetails = proposalFormService.getProposalDetails();
            return ResponseEntity.ok(proposalDetails);
        } catch (Exception e) {
            return ResponseEntity.status(500).body(null);
        }
    }

    @PostMapping("/save")
    public ResponseEntity<String> saveProposal(@RequestBody ProposalForm proposalData) {
        try {
            proposalFormService.saveProposal(proposalData);
            return ResponseEntity.ok("Proposal saved successfully.");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error saving proposal: " + e.getMessage());
        }
    }

    @PostMapping("/validate")
    public ResponseEntity<String> validateProposal(@RequestBody ProposalForm proposalData) {
        try {
            proposalFormService.validateProposal(proposalData);
            return ResponseEntity.ok("Proposal validated successfully.");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error validating proposal: " + e.getMessage());
        }
    }

    @PostMapping("/previous-policy/update")
    public ResponseEntity<String> updatePreviousPolicyDetails(@RequestBody Object previousPolicyDetails) {
        try {
            proposalFormService.updatePreviousPolicyDetails(previousPolicyDetails);
            return ResponseEntity.ok("Previous policy details updated successfully.");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error updating previous policy details: " + e.getMessage());
        }
    }

    @GetMapping("/images")
    public ResponseEntity<List<String>> fetchImagePaths(@RequestParam String applicationNumber) {
        try {
            List<String> imagePaths = proposalFormService.getImagePaths(applicationNumber);
            return ResponseEntity.ok(imagePaths);
        } catch (Exception e) {
            return ResponseEntity.status(500).body(null);
        }
    }

    @GetMapping("/rider-details")
    public ResponseEntity<List<RiderDetails>> getRiderDetails() {
        try {
            List<RiderDetails> riderDetails = proposalFormService.getRiderDetails();
            return ResponseEntity.ok(riderDetails);
        } catch (Exception e) {
            return ResponseEntity.status(500).body(null);
        }
    }

    @PostMapping("/rider-details/add")
    public ResponseEntity<String> addRiderDetail(@RequestBody RiderDetails riderDetail) {
        try {
            proposalFormService.addRiderDetail(riderDetail);
            return ResponseEntity.ok("Rider detail added successfully.");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error adding rider detail: " + e.getMessage());
        }
    }

    @DeleteMapping("/rider-details/delete")
    public ResponseEntity<String> deleteRiderDetail(@RequestParam Long riderDetailId) {
        try {
            proposalFormService.deleteRiderDetail(riderDetailId);
            return ResponseEntity.ok("Rider detail deleted successfully.");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error deleting rider detail: " + e.getMessage());
        }
    }

    @PostMapping("/rider-details/populate")
    public ResponseEntity<String> populateRiderDetails() {
        try {
            proposalFormService.populateRiderDetails();
            return ResponseEntity.ok("Rider details populated successfully.");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error populating rider details: " + e.getMessage());
        }
    }

    @PostMapping("/populate-records")
    public ResponseEntity<String> populateRecords(@RequestParam String parameter) {
        try {
            proposalFormService.populateRecords(parameter);
            return ResponseEntity.ok("Records populated successfully.");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error populating records: " + e.getMessage());
        }
    }

    @PostMapping("/populate-de2-records")
    public ResponseEntity<String> populateDE2Records(@RequestParam String param) {
        try {
            proposalFormService.populateDE2Records(param);
            return ResponseEntity.ok("DE2 records populated successfully.");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error populating DE2 records: " + e.getMessage());
        }
    }

    @PostMapping("/validate-form")
    public ResponseEntity<String> validateProposalForm() {
        try {
            proposalFormService.validateProposalForm();
            return ResponseEntity.ok("Proposal form validated successfully.");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error validating proposal form: " + e.getMessage());
        }
    }

    @GetMapping("/image")
    public ResponseEntity<byte[]> getImage(@RequestParam String proposalType, @RequestParam String currentBlock, @RequestParam String currentItem) {
        try {
            byte[] imageData = proposalFormService.fetchImage(proposalType, currentBlock, currentItem);
            return ResponseEntity.ok(imageData);
        } catch (Exception e) {
            return ResponseEntity.status(500).body(null);
        }
    }

    @GetMapping("/strip-number")
    public ResponseEntity<Integer> getStripNumber(@RequestParam String blockName, @RequestParam String fieldName, @RequestParam String proposalType) {
        try {
            int stripNumber = proposalFormService.getStripNumber(blockName, fieldName, proposalType);
            return ResponseEntity.ok(stripNumber);
        } catch (Exception e) {
            return ResponseEntity.status(500).body(null);
        }
    }

    @GetMapping("/file-name")
    public ResponseEntity<String> getFileName(@RequestParam int stripNumber, @RequestParam String proposalType) {
        try {
            String fileName = proposalFormService.getFileName(stripNumber, proposalType);
            return ResponseEntity.ok(fileName);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error fetching file name: " + e.getMessage());
        }
    }

    @GetMapping("/image-data")
    public ResponseEntity<byte[]> getImageData(@RequestParam String currentBlock, @RequestParam String currentItem, @RequestParam String proposalType) {
        try {
            byte[] imageData = proposalFormService.fetchImageData(currentBlock, currentItem, proposalType);
            return ResponseEntity.ok(imageData);
        } catch (Exception e) {
            return ResponseEntity.status(500).body(null);
        }
    }

    @GetMapping("/max-strip-number")
    public ResponseEntity<Integer> getMaxStripNumber(@RequestParam String currentBlock, @RequestParam String currentItem, @RequestParam String proposalType) {
        try {
            int maxStripNumber = proposalFormService.fetchMaxStripNumber(currentBlock, currentItem, proposalType);
            return ResponseEntity.ok(maxStripNumber);
        } catch (Exception e) {
            return ResponseEntity.status(500).body(null);
        }
    }

    @GetMapping("/proposal-form-fields")
    public ResponseEntity<List<String>> getProposalFormFields() {
        try {
            List<String> formFields = proposalFormService.getProposalFormFields();
            return ResponseEntity.ok(formFields);
        } catch (Exception e) {
            return ResponseEntity.status(500).body(null);
        }
    }

    @PostMapping("/save-proposal-record")
    public ResponseEntity<String> saveProposalRecord(@RequestBody ProposalForm proposalRecord) {
        try {
            proposalFormService.saveProposalRecord(proposalRecord);
            return ResponseEntity.ok("Proposal record saved successfully.");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error saving proposal record: " + e.getMessage());
        }
    }

    @DeleteMapping("/delete-proposal-record")
    public ResponseEntity<String> deleteProposalRecord(@RequestParam Long proposalRecordId) {
        try {
            proposalFormService.deleteProposalRecord(proposalRecordId);
            return ResponseEntity.ok("Proposal record deleted successfully.");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error deleting proposal record: " + e.getMessage());
        }
    }

    @PostMapping("/recheck-proposal-record")
    public ResponseEntity<String> recheckProposalRecord(@RequestParam Long proposalRecordId) {
        try {
            proposalFormService.recheckProposalRecord(proposalRecordId);
            return ResponseEntity.ok("Proposal record rechecked successfully.");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error rechecking proposal record: " + e.getMessage());
        }
    }

    @GetMapping("/master-policy-number")
    public ResponseEntity<String> getMasterPolicyNumber(@RequestParam String applicationNumber) {
        try {
            String masterPolicyNumber = proposalFormService.getMasterPolicyNumber(applicationNumber);
            return ResponseEntity.ok(masterPolicyNumber);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error fetching master policy number: " + e.getMessage());
        }
    }

    @GetMapping("/count-system-constants")
    public ResponseEntity<Integer> countSystemConstants(@RequestParam String masterPolicyNumber) {
        try {
            int count = proposalFormService.countSystemConstants(masterPolicyNumber);
            return ResponseEntity.ok(count);
        } catch (Exception e) {
            return ResponseEntity.status(500).body(null);
        }
    }

    @GetMapping("/fund-details")
    public ResponseEntity<List<String>> getFundDetails(@RequestParam String productCode, @RequestParam String saDateRecd) {
        try {
            List<String> fundDetails = proposalFormService.fetchFundDetails(productCode, saDateRecd);
            return ResponseEntity.ok(fundDetails);
        } catch (Exception e) {
            return ResponseEntity.status(500).body(null);
        }
    }

    @GetMapping("/proposal-type")
    public ResponseEntity<String> getProposalType(@RequestParam String applicationNo) {
        try {
            String proposalType = proposalFormService.fetchProposalType(applicationNo);
            return ResponseEntity.ok(proposalType);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error fetching proposal type: " + e.getMessage());
        }
    }

    @PostMapping("/validate-proposal-form")
    public ResponseEntity<String> validateProposalForm() {
        try {
            proposalFormService.validateProposalForm();
            return ResponseEntity.ok("Proposal form validated successfully.");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error validating proposal form: " + e.getMessage());
        }
    }
}
