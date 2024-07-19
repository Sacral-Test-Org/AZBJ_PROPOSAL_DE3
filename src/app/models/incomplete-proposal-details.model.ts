export class IncompleteProposalDetails {
  id: number;
  field1: string;
  field2: string;
  deleteCheckbox: boolean;
  prop_form_field_scr: string;
  prop_comments: string;
  dtls_rcvd: string;
  incmp_prp_dtls_sv_flg: string;

  constructor(
    id: number,
    field1: string,
    field2: string,
    deleteCheckbox: boolean,
    prop_form_field_scr: string,
    prop_comments: string,
    dtls_rcvd: string,
    incmp_prp_dtls_sv_flg: string
  ) {
    this.id = id;
    this.field1 = field1;
    this.field2 = field2;
    this.deleteCheckbox = deleteCheckbox;
    this.prop_form_field_scr = prop_form_field_scr;
    this.prop_comments = prop_comments;
    this.dtls_rcvd = dtls_rcvd;
    this.incmp_prp_dtls_sv_flg = incmp_prp_dtls_sv_flg;
  }
}