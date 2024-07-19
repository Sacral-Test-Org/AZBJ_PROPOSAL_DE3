package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.service.QuestionnaireService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/questionnaire")
public class QuestionnaireController {

    @Autowired
    private QuestionnaireService questionnaireService;

    @GetMapping("/details")
    public ResponseEntity<?> getQuestionnaireDetails() {
        return ResponseEntity.ok(questionnaireService.getQuestionnaireDetails());
    }

    @PostMapping("/update-v-isalch")
    public ResponseEntity<?> updateVIsalch(@RequestParam String ans1) {
        questionnaireService.updateVIsalch(ans1);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/check-freeze-quest-flag")
    public ResponseEntity<?> checkFreezeQuestFlag() {
        return ResponseEntity.ok(questionnaireService.checkFreezeQuestFlag());
    }

    @PostMapping("/call-procedure-based-on-grp-product")
    public ResponseEntity<?> callProcedureBasedOnGrpProduct(@RequestParam String vGrpProduct, @RequestParam String gender, @RequestParam String partId, @RequestParam String name) {
        questionnaireService.callProcedureBasedOnGrpProduct(vGrpProduct, gender, partId, name);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/log-online-activities")
    public ResponseEntity<?> logOnlineActivities(@RequestParam String applicationNo) {
        return ResponseEntity.ok(questionnaireService.logOnlineActivities(applicationNo));
    }

    @PostMapping("/validate-response")
    public ResponseEntity<?> validateResponse(@RequestParam int questionId, @RequestParam int subQuestionId, @RequestParam String response) {
        return ResponseEntity.ok(questionnaireService.validateResponse(questionId, subQuestionId, response));
    }

    @PostMapping("/process-response")
    public ResponseEntity<?> processResponse(@RequestParam int questionId, @RequestParam int subQuestionId, @RequestParam String response) {
        return ResponseEntity.ok(questionnaireService.processResponse(questionId, subQuestionId, response));
    }

    @GetMapping("/proposal-type-and-pages")
    public ResponseEntity<?> getProposalTypeAndPages(@RequestParam String applicationNumber) {
        return ResponseEntity.ok(questionnaireService.getProposalTypeAndPages(applicationNumber));
    }

    @GetMapping("/fetch-images")
    public ResponseEntity<?> fetchImages(@RequestParam int questionId, @RequestParam int subQuestionId) {
        return ResponseEntity.ok(questionnaireService.fetchImages(questionId, subQuestionId));
    }

    @PostMapping("/validate-correct-value")
    public ResponseEntity<?> validateCorrectValue(@RequestParam int questionId, @RequestParam int subQuestion, @RequestParam String correctValue) {
        return ResponseEntity.ok(questionnaireService.validateCorrectValue(questionId, subQuestion, correctValue));
    }

    @PostMapping("/navigate-based-on-correct-value")
    public ResponseEntity<?> navigateBasedOnCorrectValue(@RequestParam String correctValue) {
        questionnaireService.navigateToAnswerDescription(correctValue);
        questionnaireService.moveToNextRecord(correctValue);
        questionnaireService.displayErrorMessage(correctValue);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/submit-it-declaration")
    public ResponseEntity<?> submitITDeclaration(@RequestParam String applicationNumber, @RequestParam String insuredPersonNumber, @RequestParam String contractID, @RequestParam String mandatoryStatus, @RequestParam String passportProof, @RequestParam String nationality, @RequestParam String ipNationality, @RequestParam String propertyType) {
        questionnaireService.processITDeclaration(applicationNumber, insuredPersonNumber, contractID, mandatoryStatus, passportProof, nationality, ipNationality, propertyType);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/delete-existing-records")
    public ResponseEntity<?> deleteExistingRecords(@RequestParam String applicationNumber, @RequestParam String proposalStatus, @RequestParam int questionId, @RequestParam int subQuestion) {
        questionnaireService.deleteExistingRecords(applicationNumber, proposalStatus, questionId, subQuestion);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/insert-new-records")
    public ResponseEntity<?> insertNewRecords(@RequestBody List<?> questionnaireRecords) {
        questionnaireService.insertNewRecords(questionnaireRecords);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/check-system-constants")
    public ResponseEntity<?> checkSystemConstants(@RequestParam String newPaymentMode) {
        return ResponseEntity.ok(questionnaireService.checkSystemConstants(newPaymentMode));
    }

    @PostMapping("/check-application-bypass-details")
    public ResponseEntity<?> checkApplicationBypassDetails(@RequestParam String applicationNo) {
        return ResponseEntity.ok(questionnaireService.checkApplicationBypassDetails(applicationNo));
    }

    @PostMapping("/check-card-cases")
    public ResponseEntity<?> checkCardCases(@RequestParam String applicationNo) {
        return ResponseEntity.ok(questionnaireService.checkCardCases(applicationNo));
    }

    @PostMapping("/populate-questions")
    public ResponseEntity<?> populateQuestions(@RequestParam String frequency) {
        return ResponseEntity.ok(questionnaireService.populateQuestions(frequency));
    }
}
