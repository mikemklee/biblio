import { Message } from "@/components/pdf-summarizer";

export const DUMMY_MESSAGES_DEFAULT = [
  {
    message: "Hi, what would you like to learn about this document?",
    type: "apiMessage",
  },
] as Message[];

export const DUMMY_MESSAGES = [
  {
    message: "Hi, what would you like to learn about this document?",
    type: "apiMessage",
  },
  {
    type: "userMessage",
    message: "Can you give me a 5 points summary of the case outcome?",
  },
  {
    type: "apiMessage",
    message:
      "I'm sorry, but the provided context does not include specific details about the outcome of the case 303 CREATIVE LLC, ET AL., PETITIONERS v. AUBREY ELENIS, ET AL. Therefore, I cannot provide a summary of the case outcome in 5 points.",
    sourceDocs: [
      {
        pageContent:
          "_________________ \n_________________ \n1 Cite as:  600 U. S. ____ (2023) \nOpinion of the Court \nNOTICE: This opinion is subject to formal revision before publication in the \nUnited  States  Reports.  Readers  are  requested  to  notify  the  Reporter  of  \nDecisions,  Supreme  Court  of  the  United  States,  Washington,  D.  C.  20543,  \npio@supremecourt.gov, of any typographical or other formal errors. \nSUPREME COURT OF THE UNITED STATES \nNo. 21–476 \n303 CREATIVE LLC, ET AL., PETITIONERS v. \nAUBREY ELENIS, \nET AL. \nON WRIT OF CERTIORARI TO THE UNITED STATES COURT OF \nAPPEALS FOR THE TENTH CIRCUIT \n[June 30, 2023] \nJUSTICE GORSUCH delivered the opinion of the Court. \nLike  many  States,  Colorado  has  a  law  forbidding  busi-\nnesses  from  engaging  in  discrimination  when  they  sell  \ngoods  and  services  to  the  public.    Laws  along  these  lines  \nhave done much to secure the civil rights of all Americans.",
        metadata: {
          "loc.lines.from": 20,
          "loc.lines.to": 40,
          "loc.pageNumber": 7,
          "pdf.info.CreationDate": "D:20230629162042-04'00'",
          "pdf.info.Creator": "PScript5.dll Version 5.2.2",
          "pdf.info.IsAcroFormPresent": false,
          "pdf.info.IsXFAPresent": false,
          "pdf.info.ModDate": "D:20230629162224-04'00'",
          "pdf.info.PDFFormatVersion": "1.6",
          "pdf.info.Producer": "Acrobat Distiller 22.0 (Windows)",
          "pdf.info.Title": "21-476 303 Creative LLC v. Elenis (06/30/2023)",
          "pdf.metadata._metadata.dc:creator": "",
          "pdf.metadata._metadata.dc:format": "application/pdf",
          "pdf.metadata._metadata.dc:title":
            "21-476 303 Creative LLC v. Elenis (06/30/2023)",
          "pdf.metadata._metadata.pdf:producer":
            "Acrobat Distiller 22.0 (Windows)",
          "pdf.metadata._metadata.xmp:createdate": "2023-06-29T16:20:42-04:00",
          "pdf.metadata._metadata.xmp:creatortool":
            "PScript5.dll Version 5.2.2",
          "pdf.metadata._metadata.xmp:metadatadate":
            "2023-06-29T16:22:24-04:00",
          "pdf.metadata._metadata.xmp:modifydate": "2023-06-29T16:22:24-04:00",
          "pdf.metadata._metadata.xmpmm:documentid":
            "uuid:dc49c1da-fcce-40a8-8f3a-1df270d191b7",
          "pdf.metadata._metadata.xmpmm:instanceid":
            "uuid:9cbcff74-7047-4c4c-9efd-4c601fa48201",
          "pdf.totalPages": 70,
          "pdf.version": "1.10.100",
          source: "/Users/mikemklee/dev/tldr/docs/court-case-example.pdf",
        },
      },
      {
        pageContent:
          "21 Cite as:  600 U. S. ____ (2023) \nOpinion of the Court \nparagraphs  in  its  free-speech  analysis.    See  Brief  for  Re-\nspondents  44–45;  6  F.  4th,  at  1182–1183.)\n5 \nThe  dissent  \neven suggests that our decision today is akin to endorsing a \n“separate but equal” regime that would allow law firms to\nrefuse  women  admission  into  partnership,  restaurants  to\ndeny service to Black Americans, or businesses seeking em-\nployees  to  post  something  like  a  “White  Applicants  Only”  \nsign. Post, at 1, 16–21, 26, 28–29, 32, and n. 13, 37.  Pure \nfiction all. \nIn some places, the dissent gets so turned around about\nthe facts that it opens fire on its own position.  For instance: \nWhile stressing that a Colorado company cannot refuse “the \nfull  and  equal  enjoyment  of  [its]  services”  based  on  a  cus-\ntomer’s protected status, post, at 27, the dissent assures us",
        metadata: {
          "loc.lines.from": 23,
          "loc.lines.to": 40,
          "loc.pageNumber": 27,
          "pdf.info.CreationDate": "D:20230629162042-04'00'",
          "pdf.info.Creator": "PScript5.dll Version 5.2.2",
          "pdf.info.IsAcroFormPresent": false,
          "pdf.info.IsXFAPresent": false,
          "pdf.info.ModDate": "D:20230629162224-04'00'",
          "pdf.info.PDFFormatVersion": "1.6",
          "pdf.info.Producer": "Acrobat Distiller 22.0 (Windows)",
          "pdf.info.Title": "21-476 303 Creative LLC v. Elenis (06/30/2023)",
          "pdf.metadata._metadata.dc:creator": "",
          "pdf.metadata._metadata.dc:format": "application/pdf",
          "pdf.metadata._metadata.dc:title":
            "21-476 303 Creative LLC v. Elenis (06/30/2023)",
          "pdf.metadata._metadata.pdf:producer":
            "Acrobat Distiller 22.0 (Windows)",
          "pdf.metadata._metadata.xmp:createdate": "2023-06-29T16:20:42-04:00",
          "pdf.metadata._metadata.xmp:creatortool":
            "PScript5.dll Version 5.2.2",
          "pdf.metadata._metadata.xmp:metadatadate":
            "2023-06-29T16:22:24-04:00",
          "pdf.metadata._metadata.xmp:modifydate": "2023-06-29T16:22:24-04:00",
          "pdf.metadata._metadata.xmpmm:documentid":
            "uuid:dc49c1da-fcce-40a8-8f3a-1df270d191b7",
          "pdf.metadata._metadata.xmpmm:instanceid":
            "uuid:9cbcff74-7047-4c4c-9efd-4c601fa48201",
          "pdf.totalPages": 70,
          "pdf.version": "1.10.100",
          source: "/Users/mikemklee/dev/tldr/docs/court-case-example.pdf",
        },
      },
      {
        pageContent:
          "2 303 CREATIVE LLC v. ELENIS \nS\nOTOMAYOR, J., dissenting \n“What a difference five years makes.” Carson v. Makin, \n596 U. S. ___, ___ (2022) (S\nOTOMAYOR, J., dissenting) (slip\nop., at 5).  And not just at the Court.  Around the country,\nthere has been a backlash to the movement for liberty and\nequality  for  gender  and  sexual  minorities.   New  forms  of  \ninclusion have been met with reactionary exclusion.  This \nis heartbreaking.  Sadly, it is also familiar.  When the civil \nrights  and  women’s  rights  movements  sought  equality  in  \npublic life, some public establishments refused.  Some even \nclaimed,  based  on  sincere  religious  beliefs,  constitutional  \nrights to discriminate.  The brave Justices who once sat on \nthis Court decisively rejected those claims. \nNow  the  Court  faces  a  similar  test.    A  business  open  to\nthe public seeks to deny gay and lesbian customers the full",
        metadata: {
          "loc.lines.from": 16,
          "loc.lines.to": 33,
          "loc.pageNumber": 34,
          "pdf.info.CreationDate": "D:20230629162042-04'00'",
          "pdf.info.Creator": "PScript5.dll Version 5.2.2",
          "pdf.info.IsAcroFormPresent": false,
          "pdf.info.IsXFAPresent": false,
          "pdf.info.ModDate": "D:20230629162224-04'00'",
          "pdf.info.PDFFormatVersion": "1.6",
          "pdf.info.Producer": "Acrobat Distiller 22.0 (Windows)",
          "pdf.info.Title": "21-476 303 Creative LLC v. Elenis (06/30/2023)",
          "pdf.metadata._metadata.dc:creator": "",
          "pdf.metadata._metadata.dc:format": "application/pdf",
          "pdf.metadata._metadata.dc:title":
            "21-476 303 Creative LLC v. Elenis (06/30/2023)",
          "pdf.metadata._metadata.pdf:producer":
            "Acrobat Distiller 22.0 (Windows)",
          "pdf.metadata._metadata.xmp:createdate": "2023-06-29T16:20:42-04:00",
          "pdf.metadata._metadata.xmp:creatortool":
            "PScript5.dll Version 5.2.2",
          "pdf.metadata._metadata.xmp:metadatadate":
            "2023-06-29T16:22:24-04:00",
          "pdf.metadata._metadata.xmp:modifydate": "2023-06-29T16:22:24-04:00",
          "pdf.metadata._metadata.xmpmm:documentid":
            "uuid:dc49c1da-fcce-40a8-8f3a-1df270d191b7",
          "pdf.metadata._metadata.xmpmm:instanceid":
            "uuid:9cbcff74-7047-4c4c-9efd-4c601fa48201",
          "pdf.totalPages": 70,
          "pdf.version": "1.10.100",
          source: "/Users/mikemklee/dev/tldr/docs/court-case-example.pdf",
        },
      },
      {
        pageContent:
          "_________________ \n_________________ \n1 Cite as:  600 U. S. ____ (2023) \nS\nOTOMAYOR, J., dissenting \nSUPREME COURT OF THE UNITED STATES \nNo. 21–476 \n303 CREATIVE LLC, ET AL., PETITIONERS v. \nAUBREY ELENIS, \nET AL. \nON WRIT OF CERTIORARI TO THE UNITED STATES COURT OF \nAPPEALS FOR THE TENTH CIRCUIT \n[June 30, 2023] \nJUSTICE SOTOMAYOR,  with  whom  JUSTICE KAGAN  and  \nJ\nUSTICE JACKSON join, dissenting. \nFive years ago, this Court recognized the “general rule”\nthat religious and philosophical objections to gay marriage \n“do not allow business owners and other actors in the econ-\nomy and in society to deny protected persons equal access\nto goods and services under a neutral and generally appli-\ncable public accommodations law.”  Masterpiece Cakeshop, \nLtd. v. Colorado  Civil  Rights  Comm’n,  584  U.  S.  ___,  ___  \n(2018) (slip op., at 9). The Court also recognized the “seri-\nous stigma” that would result if “purveyors of goods and ser-",
        metadata: {
          "loc.lines.from": 23,
          "loc.lines.to": 47,
          "loc.pageNumber": 33,
          "pdf.info.CreationDate": "D:20230629162042-04'00'",
          "pdf.info.Creator": "PScript5.dll Version 5.2.2",
          "pdf.info.IsAcroFormPresent": false,
          "pdf.info.IsXFAPresent": false,
          "pdf.info.ModDate": "D:20230629162224-04'00'",
          "pdf.info.PDFFormatVersion": "1.6",
          "pdf.info.Producer": "Acrobat Distiller 22.0 (Windows)",
          "pdf.info.Title": "21-476 303 Creative LLC v. Elenis (06/30/2023)",
          "pdf.metadata._metadata.dc:creator": "",
          "pdf.metadata._metadata.dc:format": "application/pdf",
          "pdf.metadata._metadata.dc:title":
            "21-476 303 Creative LLC v. Elenis (06/30/2023)",
          "pdf.metadata._metadata.pdf:producer":
            "Acrobat Distiller 22.0 (Windows)",
          "pdf.metadata._metadata.xmp:createdate": "2023-06-29T16:20:42-04:00",
          "pdf.metadata._metadata.xmp:creatortool":
            "PScript5.dll Version 5.2.2",
          "pdf.metadata._metadata.xmp:metadatadate":
            "2023-06-29T16:22:24-04:00",
          "pdf.metadata._metadata.xmp:modifydate": "2023-06-29T16:22:24-04:00",
          "pdf.metadata._metadata.xmpmm:documentid":
            "uuid:dc49c1da-fcce-40a8-8f3a-1df270d191b7",
          "pdf.metadata._metadata.xmpmm:instanceid":
            "uuid:9cbcff74-7047-4c4c-9efd-4c601fa48201",
          "pdf.totalPages": 70,
          "pdf.version": "1.10.100",
          source: "/Users/mikemklee/dev/tldr/docs/court-case-example.pdf",
        },
      },
    ],
  },
  {
    type: "userMessage",
    message: "who were the parties involved in the case?",
  },
  {
    type: "apiMessage",
    message:
      "The parties involved in the case 303 CREATIVE LLC, ET AL., PETITIONERS v. AUBREY ELENIS, ET AL. were:\n\n1. 303 Creative LLC and associated parties: This is a limited liability company that sells graphic and website designs for profit. Lorie Smith is the company’s founder and sole member-owner.\n\n2. Aubrey Elenis and associated parties: The context does not provide specific details about Aubrey Elenis and their role or position.",
    sourceDocs: [
      {
        pageContent:
          "_________________ \n_________________ \n1 Cite as:  600 U. S. ____ (2023) \nOpinion of the Court \nNOTICE: This opinion is subject to formal revision before publication in the \nUnited  States  Reports.  Readers  are  requested  to  notify  the  Reporter  of  \nDecisions,  Supreme  Court  of  the  United  States,  Washington,  D.  C.  20543,  \npio@supremecourt.gov, of any typographical or other formal errors. \nSUPREME COURT OF THE UNITED STATES \nNo. 21–476 \n303 CREATIVE LLC, ET AL., PETITIONERS v. \nAUBREY ELENIS, \nET AL. \nON WRIT OF CERTIORARI TO THE UNITED STATES COURT OF \nAPPEALS FOR THE TENTH CIRCUIT \n[June 30, 2023] \nJUSTICE GORSUCH delivered the opinion of the Court. \nLike  many  States,  Colorado  has  a  law  forbidding  busi-\nnesses  from  engaging  in  discrimination  when  they  sell  \ngoods  and  services  to  the  public.    Laws  along  these  lines  \nhave done much to secure the civil rights of all Americans.",
        metadata: {
          "loc.lines.from": 20,
          "loc.lines.to": 40,
          "loc.pageNumber": 7,
          "pdf.info.CreationDate": "D:20230629162042-04'00'",
          "pdf.info.Creator": "PScript5.dll Version 5.2.2",
          "pdf.info.IsAcroFormPresent": false,
          "pdf.info.IsXFAPresent": false,
          "pdf.info.ModDate": "D:20230629162224-04'00'",
          "pdf.info.PDFFormatVersion": "1.6",
          "pdf.info.Producer": "Acrobat Distiller 22.0 (Windows)",
          "pdf.info.Title": "21-476 303 Creative LLC v. Elenis (06/30/2023)",
          "pdf.metadata._metadata.dc:creator": "",
          "pdf.metadata._metadata.dc:format": "application/pdf",
          "pdf.metadata._metadata.dc:title":
            "21-476 303 Creative LLC v. Elenis (06/30/2023)",
          "pdf.metadata._metadata.pdf:producer":
            "Acrobat Distiller 22.0 (Windows)",
          "pdf.metadata._metadata.xmp:createdate": "2023-06-29T16:20:42-04:00",
          "pdf.metadata._metadata.xmp:creatortool":
            "PScript5.dll Version 5.2.2",
          "pdf.metadata._metadata.xmp:metadatadate":
            "2023-06-29T16:22:24-04:00",
          "pdf.metadata._metadata.xmp:modifydate": "2023-06-29T16:22:24-04:00",
          "pdf.metadata._metadata.xmpmm:documentid":
            "uuid:dc49c1da-fcce-40a8-8f3a-1df270d191b7",
          "pdf.metadata._metadata.xmpmm:instanceid":
            "uuid:9cbcff74-7047-4c4c-9efd-4c601fa48201",
          "pdf.totalPages": 70,
          "pdf.version": "1.10.100",
          source: "/Users/mikemklee/dev/tldr/docs/court-case-example.pdf",
        },
      },
      {
        pageContent:
          "22 303 CREATIVE LLC v. ELENIS \nS\nOTOMAYOR, J., dissenting \nits wedding websites.  The only thing the business may not \ndo is deny whatever websites it offers on the basis of sexual \norientation.    This  Court,  however,  grants  the  business  a  \nbroad exemption from state law and allows the business to \npost a notice that says: Wedding websites will be refused to\ngays  and  lesbians.    The  Court’s  decision,  which  conflates  \ndenial of service and protected expression, is a grave error. \nA \n303 Creative LLC is a limited liability company that sells\ngraphic and website designs for profit.  Lorie Smith is the \ncompany’s founder and sole member-owner.  Smith believes \nsame-sex marriages are “false,” because “‘God’s true story \nof marriage’” is a story of a “‘union between one man and \none woman.’”  Brief for Petitioners 4, 6–7 (quoting App. to\nPet. for Cert. 188a, 189a); Tr. of Oral Arg. 36, 40–41.  Same-",
        metadata: {
          "loc.lines.from": 21,
          "loc.lines.to": 38,
          "loc.pageNumber": 54,
          "pdf.info.CreationDate": "D:20230629162042-04'00'",
          "pdf.info.Creator": "PScript5.dll Version 5.2.2",
          "pdf.info.IsAcroFormPresent": false,
          "pdf.info.IsXFAPresent": false,
          "pdf.info.ModDate": "D:20230629162224-04'00'",
          "pdf.info.PDFFormatVersion": "1.6",
          "pdf.info.Producer": "Acrobat Distiller 22.0 (Windows)",
          "pdf.info.Title": "21-476 303 Creative LLC v. Elenis (06/30/2023)",
          "pdf.metadata._metadata.dc:creator": "",
          "pdf.metadata._metadata.dc:format": "application/pdf",
          "pdf.metadata._metadata.dc:title":
            "21-476 303 Creative LLC v. Elenis (06/30/2023)",
          "pdf.metadata._metadata.pdf:producer":
            "Acrobat Distiller 22.0 (Windows)",
          "pdf.metadata._metadata.xmp:createdate": "2023-06-29T16:20:42-04:00",
          "pdf.metadata._metadata.xmp:creatortool":
            "PScript5.dll Version 5.2.2",
          "pdf.metadata._metadata.xmp:metadatadate":
            "2023-06-29T16:22:24-04:00",
          "pdf.metadata._metadata.xmp:modifydate": "2023-06-29T16:22:24-04:00",
          "pdf.metadata._metadata.xmpmm:documentid":
            "uuid:dc49c1da-fcce-40a8-8f3a-1df270d191b7",
          "pdf.metadata._metadata.xmpmm:instanceid":
            "uuid:9cbcff74-7047-4c4c-9efd-4c601fa48201",
          "pdf.totalPages": 70,
          "pdf.version": "1.10.100",
          source: "/Users/mikemklee/dev/tldr/docs/court-case-example.pdf",
        },
      },
      {
        pageContent:
          "2 303 CREATIVE LLC v. ELENIS \nOpinion of the Court \nwebsites  will  discuss  how  the  couple  met,  explain  their  \nbackgrounds, families, and future plans, and provide infor-\nmation about their upcoming wedding.  All of the text and \ngraphics on these websites will be “original,” “customized,” \nand “tailored” creations.  Id., at 187a.  The websites will be \n“expressive in nature,” designed “to communicate a partic-\nular message.” Id., at 181a.  Viewers will know, too, “that \nthe  websites  are  [Ms.  Smith’s]  original  artwork,”  for  the\nname of the company she owns and operates by herself will\nbe displayed on every one. Id., at 187a. \nWhile  Ms.  Smith  has  laid  the  groundwork  for  her  new  \nventure,  she  has  yet  to  carry  out  her  plans.    She  worries  \nthat, if she does so, Colorado will force her to express views\nwith which she disagrees.  Ms. Smith provides her website",
        metadata: {
          "loc.lines.from": 19,
          "loc.lines.to": 34,
          "loc.pageNumber": 8,
          "pdf.info.CreationDate": "D:20230629162042-04'00'",
          "pdf.info.Creator": "PScript5.dll Version 5.2.2",
          "pdf.info.IsAcroFormPresent": false,
          "pdf.info.IsXFAPresent": false,
          "pdf.info.ModDate": "D:20230629162224-04'00'",
          "pdf.info.PDFFormatVersion": "1.6",
          "pdf.info.Producer": "Acrobat Distiller 22.0 (Windows)",
          "pdf.info.Title": "21-476 303 Creative LLC v. Elenis (06/30/2023)",
          "pdf.metadata._metadata.dc:creator": "",
          "pdf.metadata._metadata.dc:format": "application/pdf",
          "pdf.metadata._metadata.dc:title":
            "21-476 303 Creative LLC v. Elenis (06/30/2023)",
          "pdf.metadata._metadata.pdf:producer":
            "Acrobat Distiller 22.0 (Windows)",
          "pdf.metadata._metadata.xmp:createdate": "2023-06-29T16:20:42-04:00",
          "pdf.metadata._metadata.xmp:creatortool":
            "PScript5.dll Version 5.2.2",
          "pdf.metadata._metadata.xmp:metadatadate":
            "2023-06-29T16:22:24-04:00",
          "pdf.metadata._metadata.xmp:modifydate": "2023-06-29T16:22:24-04:00",
          "pdf.metadata._metadata.xmpmm:documentid":
            "uuid:dc49c1da-fcce-40a8-8f3a-1df270d191b7",
          "pdf.metadata._metadata.xmpmm:instanceid":
            "uuid:9cbcff74-7047-4c4c-9efd-4c601fa48201",
          "pdf.totalPages": 70,
          "pdf.version": "1.10.100",
          source: "/Users/mikemklee/dev/tldr/docs/court-case-example.pdf",
        },
      },
      {
        pageContent:
          "2 303 CREATIVE LLC v. ELENIS \nSyllabus \nwill be “customized and tailored” through close collaboration with in-\ndividual  couples,  and  will  “express  Ms.  Smith’s  and  303  Creative’s\nmessage celebrating and promoting” her view of marriage; viewers of\nMs. Smith’s websites “will know that the websites are her original art-\nwork;” and “[t]here are numerous companies in the State of Colorado\nand across the nation that offer custom website design services.”\nUltimately, the district court held that Ms. Smith was not entitled \nto the injunction she sought, and the Tenth Circuit affirmed. \nHeld:  The  First  Amendment  prohibits  Colorado  from  forcing  a  website  \ndesigner  to  create  expressive  designs  speaking  messages  with  which  \nthe designer disagrees.  Pp. 6–26. \n(a)  The  framers  designed  the  Free  Speech  Clause  of  the  First",
        metadata: {
          "loc.lines.from": 31,
          "loc.lines.to": 44,
          "loc.pageNumber": 2,
          "pdf.info.CreationDate": "D:20230629162042-04'00'",
          "pdf.info.Creator": "PScript5.dll Version 5.2.2",
          "pdf.info.IsAcroFormPresent": false,
          "pdf.info.IsXFAPresent": false,
          "pdf.info.ModDate": "D:20230629162224-04'00'",
          "pdf.info.PDFFormatVersion": "1.6",
          "pdf.info.Producer": "Acrobat Distiller 22.0 (Windows)",
          "pdf.info.Title": "21-476 303 Creative LLC v. Elenis (06/30/2023)",
          "pdf.metadata._metadata.dc:creator": "",
          "pdf.metadata._metadata.dc:format": "application/pdf",
          "pdf.metadata._metadata.dc:title":
            "21-476 303 Creative LLC v. Elenis (06/30/2023)",
          "pdf.metadata._metadata.pdf:producer":
            "Acrobat Distiller 22.0 (Windows)",
          "pdf.metadata._metadata.xmp:createdate": "2023-06-29T16:20:42-04:00",
          "pdf.metadata._metadata.xmp:creatortool":
            "PScript5.dll Version 5.2.2",
          "pdf.metadata._metadata.xmp:metadatadate":
            "2023-06-29T16:22:24-04:00",
          "pdf.metadata._metadata.xmp:modifydate": "2023-06-29T16:22:24-04:00",
          "pdf.metadata._metadata.xmpmm:documentid":
            "uuid:dc49c1da-fcce-40a8-8f3a-1df270d191b7",
          "pdf.metadata._metadata.xmpmm:instanceid":
            "uuid:9cbcff74-7047-4c4c-9efd-4c601fa48201",
          "pdf.totalPages": 70,
          "pdf.version": "1.10.100",
          source: "/Users/mikemklee/dev/tldr/docs/court-case-example.pdf",
        },
      },
    ],
  },
  {
    type: "userMessage",
    message: "Who was Aubrey Elenis in this case?",
  },
  {
    type: "apiMessage",
    message:
      "I'm sorry, but the provided context does not include specific details about Aubrey Elenis and their role or position in the case 303 CREATIVE LLC, ET AL., PETITIONERS v. AUBREY ELENIS, ET AL.",
    sourceDocs: [
      {
        pageContent:
          "_________________ \n_________________ \n1 Cite as:  600 U. S. ____ (2023) \nOpinion of the Court \nNOTICE: This opinion is subject to formal revision before publication in the \nUnited  States  Reports.  Readers  are  requested  to  notify  the  Reporter  of  \nDecisions,  Supreme  Court  of  the  United  States,  Washington,  D.  C.  20543,  \npio@supremecourt.gov, of any typographical or other formal errors. \nSUPREME COURT OF THE UNITED STATES \nNo. 21–476 \n303 CREATIVE LLC, ET AL., PETITIONERS v. \nAUBREY ELENIS, \nET AL. \nON WRIT OF CERTIORARI TO THE UNITED STATES COURT OF \nAPPEALS FOR THE TENTH CIRCUIT \n[June 30, 2023] \nJUSTICE GORSUCH delivered the opinion of the Court. \nLike  many  States,  Colorado  has  a  law  forbidding  busi-\nnesses  from  engaging  in  discrimination  when  they  sell  \ngoods  and  services  to  the  public.    Laws  along  these  lines  \nhave done much to secure the civil rights of all Americans.",
        metadata: {
          "loc.lines.from": 20,
          "loc.lines.to": 40,
          "loc.pageNumber": 7,
          "pdf.info.CreationDate": "D:20230629162042-04'00'",
          "pdf.info.Creator": "PScript5.dll Version 5.2.2",
          "pdf.info.IsAcroFormPresent": false,
          "pdf.info.IsXFAPresent": false,
          "pdf.info.ModDate": "D:20230629162224-04'00'",
          "pdf.info.PDFFormatVersion": "1.6",
          "pdf.info.Producer": "Acrobat Distiller 22.0 (Windows)",
          "pdf.info.Title": "21-476 303 Creative LLC v. Elenis (06/30/2023)",
          "pdf.metadata._metadata.dc:creator": "",
          "pdf.metadata._metadata.dc:format": "application/pdf",
          "pdf.metadata._metadata.dc:title":
            "21-476 303 Creative LLC v. Elenis (06/30/2023)",
          "pdf.metadata._metadata.pdf:producer":
            "Acrobat Distiller 22.0 (Windows)",
          "pdf.metadata._metadata.xmp:createdate": "2023-06-29T16:20:42-04:00",
          "pdf.metadata._metadata.xmp:creatortool":
            "PScript5.dll Version 5.2.2",
          "pdf.metadata._metadata.xmp:metadatadate":
            "2023-06-29T16:22:24-04:00",
          "pdf.metadata._metadata.xmp:modifydate": "2023-06-29T16:22:24-04:00",
          "pdf.metadata._metadata.xmpmm:documentid":
            "uuid:dc49c1da-fcce-40a8-8f3a-1df270d191b7",
          "pdf.metadata._metadata.xmpmm:instanceid":
            "uuid:9cbcff74-7047-4c4c-9efd-4c601fa48201",
          "pdf.totalPages": 70,
          "pdf.version": "1.10.100",
          source: "/Users/mikemklee/dev/tldr/docs/court-case-example.pdf",
        },
      },
      {
        pageContent:
          "22 303 CREATIVE LLC v. ELENIS \nS\nOTOMAYOR, J., dissenting \nits wedding websites.  The only thing the business may not \ndo is deny whatever websites it offers on the basis of sexual \norientation.    This  Court,  however,  grants  the  business  a  \nbroad exemption from state law and allows the business to \npost a notice that says: Wedding websites will be refused to\ngays  and  lesbians.    The  Court’s  decision,  which  conflates  \ndenial of service and protected expression, is a grave error. \nA \n303 Creative LLC is a limited liability company that sells\ngraphic and website designs for profit.  Lorie Smith is the \ncompany’s founder and sole member-owner.  Smith believes \nsame-sex marriages are “false,” because “‘God’s true story \nof marriage’” is a story of a “‘union between one man and \none woman.’”  Brief for Petitioners 4, 6–7 (quoting App. to\nPet. for Cert. 188a, 189a); Tr. of Oral Arg. 36, 40–41.  Same-",
        metadata: {
          "loc.lines.from": 21,
          "loc.lines.to": 38,
          "loc.pageNumber": 54,
          "pdf.info.CreationDate": "D:20230629162042-04'00'",
          "pdf.info.Creator": "PScript5.dll Version 5.2.2",
          "pdf.info.IsAcroFormPresent": false,
          "pdf.info.IsXFAPresent": false,
          "pdf.info.ModDate": "D:20230629162224-04'00'",
          "pdf.info.PDFFormatVersion": "1.6",
          "pdf.info.Producer": "Acrobat Distiller 22.0 (Windows)",
          "pdf.info.Title": "21-476 303 Creative LLC v. Elenis (06/30/2023)",
          "pdf.metadata._metadata.dc:creator": "",
          "pdf.metadata._metadata.dc:format": "application/pdf",
          "pdf.metadata._metadata.dc:title":
            "21-476 303 Creative LLC v. Elenis (06/30/2023)",
          "pdf.metadata._metadata.pdf:producer":
            "Acrobat Distiller 22.0 (Windows)",
          "pdf.metadata._metadata.xmp:createdate": "2023-06-29T16:20:42-04:00",
          "pdf.metadata._metadata.xmp:creatortool":
            "PScript5.dll Version 5.2.2",
          "pdf.metadata._metadata.xmp:metadatadate":
            "2023-06-29T16:22:24-04:00",
          "pdf.metadata._metadata.xmp:modifydate": "2023-06-29T16:22:24-04:00",
          "pdf.metadata._metadata.xmpmm:documentid":
            "uuid:dc49c1da-fcce-40a8-8f3a-1df270d191b7",
          "pdf.metadata._metadata.xmpmm:instanceid":
            "uuid:9cbcff74-7047-4c4c-9efd-4c601fa48201",
          "pdf.totalPages": 70,
          "pdf.version": "1.10.100",
          source: "/Users/mikemklee/dev/tldr/docs/court-case-example.pdf",
        },
      },
      {
        pageContent:
          "12 303 CREATIVE LLC v. ELENIS \nOpinion of the Court \ntopic somehow implicates a customer’s statutorily protected \ntrait.    6  F.  4th,  at  1198  (Tymkovich,  C.  J.,  dissenting).\nTaken seriously, that principle would allow the government \nto  force  all  manner  of  artists,  speechwriters,  and  others\nwhose services involve speech to speak what they do not be-\nlieve on pain of penalty.  The government could require “an\nunwilling Muslim movie director to make a film with a Zi-\nonist message,” or “an atheist muralist to accept a commis-\nsion  celebrating  Evangelical  zeal,”  so  long  as  they  would\nmake films or murals for other members of the public with\ndifferent messages. Id., at 1199.  Equally, the government\ncould force a male website designer married to another man \nto  design  websites  for  an  organization  that  advocates\nagainst  same-sex  marriage.   See  Brief  for  Petitioners  26–",
        metadata: {
          "loc.lines.from": 17,
          "loc.lines.to": 32,
          "loc.pageNumber": 18,
          "pdf.info.CreationDate": "D:20230629162042-04'00'",
          "pdf.info.Creator": "PScript5.dll Version 5.2.2",
          "pdf.info.IsAcroFormPresent": false,
          "pdf.info.IsXFAPresent": false,
          "pdf.info.ModDate": "D:20230629162224-04'00'",
          "pdf.info.PDFFormatVersion": "1.6",
          "pdf.info.Producer": "Acrobat Distiller 22.0 (Windows)",
          "pdf.info.Title": "21-476 303 Creative LLC v. Elenis (06/30/2023)",
          "pdf.metadata._metadata.dc:creator": "",
          "pdf.metadata._metadata.dc:format": "application/pdf",
          "pdf.metadata._metadata.dc:title":
            "21-476 303 Creative LLC v. Elenis (06/30/2023)",
          "pdf.metadata._metadata.pdf:producer":
            "Acrobat Distiller 22.0 (Windows)",
          "pdf.metadata._metadata.xmp:createdate": "2023-06-29T16:20:42-04:00",
          "pdf.metadata._metadata.xmp:creatortool":
            "PScript5.dll Version 5.2.2",
          "pdf.metadata._metadata.xmp:metadatadate":
            "2023-06-29T16:22:24-04:00",
          "pdf.metadata._metadata.xmp:modifydate": "2023-06-29T16:22:24-04:00",
          "pdf.metadata._metadata.xmpmm:documentid":
            "uuid:dc49c1da-fcce-40a8-8f3a-1df270d191b7",
          "pdf.metadata._metadata.xmpmm:instanceid":
            "uuid:9cbcff74-7047-4c4c-9efd-4c601fa48201",
          "pdf.totalPages": 70,
          "pdf.version": "1.10.100",
          source: "/Users/mikemklee/dev/tldr/docs/court-case-example.pdf",
        },
      },
      {
        pageContent:
          "2 303 CREATIVE LLC v. ELENIS \nOpinion of the Court \nwebsites  will  discuss  how  the  couple  met,  explain  their  \nbackgrounds, families, and future plans, and provide infor-\nmation about their upcoming wedding.  All of the text and \ngraphics on these websites will be “original,” “customized,” \nand “tailored” creations.  Id., at 187a.  The websites will be \n“expressive in nature,” designed “to communicate a partic-\nular message.” Id., at 181a.  Viewers will know, too, “that \nthe  websites  are  [Ms.  Smith’s]  original  artwork,”  for  the\nname of the company she owns and operates by herself will\nbe displayed on every one. Id., at 187a. \nWhile  Ms.  Smith  has  laid  the  groundwork  for  her  new  \nventure,  she  has  yet  to  carry  out  her  plans.    She  worries  \nthat, if she does so, Colorado will force her to express views\nwith which she disagrees.  Ms. Smith provides her website",
        metadata: {
          "loc.lines.from": 19,
          "loc.lines.to": 34,
          "loc.pageNumber": 8,
          "pdf.info.CreationDate": "D:20230629162042-04'00'",
          "pdf.info.Creator": "PScript5.dll Version 5.2.2",
          "pdf.info.IsAcroFormPresent": false,
          "pdf.info.IsXFAPresent": false,
          "pdf.info.ModDate": "D:20230629162224-04'00'",
          "pdf.info.PDFFormatVersion": "1.6",
          "pdf.info.Producer": "Acrobat Distiller 22.0 (Windows)",
          "pdf.info.Title": "21-476 303 Creative LLC v. Elenis (06/30/2023)",
          "pdf.metadata._metadata.dc:creator": "",
          "pdf.metadata._metadata.dc:format": "application/pdf",
          "pdf.metadata._metadata.dc:title":
            "21-476 303 Creative LLC v. Elenis (06/30/2023)",
          "pdf.metadata._metadata.pdf:producer":
            "Acrobat Distiller 22.0 (Windows)",
          "pdf.metadata._metadata.xmp:createdate": "2023-06-29T16:20:42-04:00",
          "pdf.metadata._metadata.xmp:creatortool":
            "PScript5.dll Version 5.2.2",
          "pdf.metadata._metadata.xmp:metadatadate":
            "2023-06-29T16:22:24-04:00",
          "pdf.metadata._metadata.xmp:modifydate": "2023-06-29T16:22:24-04:00",
          "pdf.metadata._metadata.xmpmm:documentid":
            "uuid:dc49c1da-fcce-40a8-8f3a-1df270d191b7",
          "pdf.metadata._metadata.xmpmm:instanceid":
            "uuid:9cbcff74-7047-4c4c-9efd-4c601fa48201",
          "pdf.totalPages": 70,
          "pdf.version": "1.10.100",
          source: "/Users/mikemklee/dev/tldr/docs/court-case-example.pdf",
        },
      },
    ],
  },
  {
    type: "userMessage",
    message: "what was the opinion of the court?",
  },
  {
    type: "apiMessage",
    message:
      "The court's opinion in the case 303 CREATIVE LLC, ET AL., PETITIONERS v. AUBREY ELENIS, ET AL. was delivered by Justice Gorsuch. The context provided does not include the full details of the court's opinion, but it does highlight a few key points:\n\n1. The court acknowledged that Colorado, like many states, has a law forbidding businesses from engaging in discrimination when they sell goods and services to the public. \n\n2. The court discussed the principle that the government could not force artists, speechwriters, and others whose services involve speech to speak what they do not believe on pain of penalty. \n\n3. The court expressed concern about the potential for the government to compel individuals to create content that goes against their beliefs, such as forcing a Muslim movie director to make a film with a Zionist message, or an atheist muralist to accept a commission celebrating Evangelical zeal.\n\n4. The court also mentioned the possibility of a gay website designer being forced to create websites for a group advocating against same-sex marriage.\n\n5. The court seemed to disagree with the dissent's view, suggesting that trusting state governments to only coerce \"enlightened\" speech could be a dangerous calculation.\n\nPlease note that this is not a comprehensive summary of the court's opinion, as the full details are not provided in the context.",
    sourceDocs: [
      {
        pageContent:
          "_________________ \n_________________ \n1 Cite as:  600 U. S. ____ (2023) \nOpinion of the Court \nNOTICE: This opinion is subject to formal revision before publication in the \nUnited  States  Reports.  Readers  are  requested  to  notify  the  Reporter  of  \nDecisions,  Supreme  Court  of  the  United  States,  Washington,  D.  C.  20543,  \npio@supremecourt.gov, of any typographical or other formal errors. \nSUPREME COURT OF THE UNITED STATES \nNo. 21–476 \n303 CREATIVE LLC, ET AL., PETITIONERS v. \nAUBREY ELENIS, \nET AL. \nON WRIT OF CERTIORARI TO THE UNITED STATES COURT OF \nAPPEALS FOR THE TENTH CIRCUIT \n[June 30, 2023] \nJUSTICE GORSUCH delivered the opinion of the Court. \nLike  many  States,  Colorado  has  a  law  forbidding  busi-\nnesses  from  engaging  in  discrimination  when  they  sell  \ngoods  and  services  to  the  public.    Laws  along  these  lines  \nhave done much to secure the civil rights of all Americans.",
        metadata: {
          "loc.lines.from": 20,
          "loc.lines.to": 40,
          "loc.pageNumber": 7,
          "pdf.info.CreationDate": "D:20230629162042-04'00'",
          "pdf.info.Creator": "PScript5.dll Version 5.2.2",
          "pdf.info.IsAcroFormPresent": false,
          "pdf.info.IsXFAPresent": false,
          "pdf.info.ModDate": "D:20230629162224-04'00'",
          "pdf.info.PDFFormatVersion": "1.6",
          "pdf.info.Producer": "Acrobat Distiller 22.0 (Windows)",
          "pdf.info.Title": "21-476 303 Creative LLC v. Elenis (06/30/2023)",
          "pdf.metadata._metadata.dc:creator": "",
          "pdf.metadata._metadata.dc:format": "application/pdf",
          "pdf.metadata._metadata.dc:title":
            "21-476 303 Creative LLC v. Elenis (06/30/2023)",
          "pdf.metadata._metadata.pdf:producer":
            "Acrobat Distiller 22.0 (Windows)",
          "pdf.metadata._metadata.xmp:createdate": "2023-06-29T16:20:42-04:00",
          "pdf.metadata._metadata.xmp:creatortool":
            "PScript5.dll Version 5.2.2",
          "pdf.metadata._metadata.xmp:metadatadate":
            "2023-06-29T16:22:24-04:00",
          "pdf.metadata._metadata.xmp:modifydate": "2023-06-29T16:22:24-04:00",
          "pdf.metadata._metadata.xmpmm:documentid":
            "uuid:dc49c1da-fcce-40a8-8f3a-1df270d191b7",
          "pdf.metadata._metadata.xmpmm:instanceid":
            "uuid:9cbcff74-7047-4c4c-9efd-4c601fa48201",
          "pdf.totalPages": 70,
          "pdf.version": "1.10.100",
          source: "/Users/mikemklee/dev/tldr/docs/court-case-example.pdf",
        },
      },
      {
        pageContent:
          "22 303 CREATIVE LLC v. ELENIS \nS\nOTOMAYOR, J., dissenting \nits wedding websites.  The only thing the business may not \ndo is deny whatever websites it offers on the basis of sexual \norientation.    This  Court,  however,  grants  the  business  a  \nbroad exemption from state law and allows the business to \npost a notice that says: Wedding websites will be refused to\ngays  and  lesbians.    The  Court’s  decision,  which  conflates  \ndenial of service and protected expression, is a grave error. \nA \n303 Creative LLC is a limited liability company that sells\ngraphic and website designs for profit.  Lorie Smith is the \ncompany’s founder and sole member-owner.  Smith believes \nsame-sex marriages are “false,” because “‘God’s true story \nof marriage’” is a story of a “‘union between one man and \none woman.’”  Brief for Petitioners 4, 6–7 (quoting App. to\nPet. for Cert. 188a, 189a); Tr. of Oral Arg. 36, 40–41.  Same-",
        metadata: {
          "loc.lines.from": 21,
          "loc.lines.to": 38,
          "loc.pageNumber": 54,
          "pdf.info.CreationDate": "D:20230629162042-04'00'",
          "pdf.info.Creator": "PScript5.dll Version 5.2.2",
          "pdf.info.IsAcroFormPresent": false,
          "pdf.info.IsXFAPresent": false,
          "pdf.info.ModDate": "D:20230629162224-04'00'",
          "pdf.info.PDFFormatVersion": "1.6",
          "pdf.info.Producer": "Acrobat Distiller 22.0 (Windows)",
          "pdf.info.Title": "21-476 303 Creative LLC v. Elenis (06/30/2023)",
          "pdf.metadata._metadata.dc:creator": "",
          "pdf.metadata._metadata.dc:format": "application/pdf",
          "pdf.metadata._metadata.dc:title":
            "21-476 303 Creative LLC v. Elenis (06/30/2023)",
          "pdf.metadata._metadata.pdf:producer":
            "Acrobat Distiller 22.0 (Windows)",
          "pdf.metadata._metadata.xmp:createdate": "2023-06-29T16:20:42-04:00",
          "pdf.metadata._metadata.xmp:creatortool":
            "PScript5.dll Version 5.2.2",
          "pdf.metadata._metadata.xmp:metadatadate":
            "2023-06-29T16:22:24-04:00",
          "pdf.metadata._metadata.xmp:modifydate": "2023-06-29T16:22:24-04:00",
          "pdf.metadata._metadata.xmpmm:documentid":
            "uuid:dc49c1da-fcce-40a8-8f3a-1df270d191b7",
          "pdf.metadata._metadata.xmpmm:instanceid":
            "uuid:9cbcff74-7047-4c4c-9efd-4c601fa48201",
          "pdf.totalPages": 70,
          "pdf.version": "1.10.100",
          source: "/Users/mikemklee/dev/tldr/docs/court-case-example.pdf",
        },
      },
      {
        pageContent:
          "12 303 CREATIVE LLC v. ELENIS \nOpinion of the Court \ntopic somehow implicates a customer’s statutorily protected \ntrait.    6  F.  4th,  at  1198  (Tymkovich,  C.  J.,  dissenting).\nTaken seriously, that principle would allow the government \nto  force  all  manner  of  artists,  speechwriters,  and  others\nwhose services involve speech to speak what they do not be-\nlieve on pain of penalty.  The government could require “an\nunwilling Muslim movie director to make a film with a Zi-\nonist message,” or “an atheist muralist to accept a commis-\nsion  celebrating  Evangelical  zeal,”  so  long  as  they  would\nmake films or murals for other members of the public with\ndifferent messages. Id., at 1199.  Equally, the government\ncould force a male website designer married to another man \nto  design  websites  for  an  organization  that  advocates\nagainst  same-sex  marriage.   See  Brief  for  Petitioners  26–",
        metadata: {
          "loc.lines.from": 17,
          "loc.lines.to": 32,
          "loc.pageNumber": 18,
          "pdf.info.CreationDate": "D:20230629162042-04'00'",
          "pdf.info.Creator": "PScript5.dll Version 5.2.2",
          "pdf.info.IsAcroFormPresent": false,
          "pdf.info.IsXFAPresent": false,
          "pdf.info.ModDate": "D:20230629162224-04'00'",
          "pdf.info.PDFFormatVersion": "1.6",
          "pdf.info.Producer": "Acrobat Distiller 22.0 (Windows)",
          "pdf.info.Title": "21-476 303 Creative LLC v. Elenis (06/30/2023)",
          "pdf.metadata._metadata.dc:creator": "",
          "pdf.metadata._metadata.dc:format": "application/pdf",
          "pdf.metadata._metadata.dc:title":
            "21-476 303 Creative LLC v. Elenis (06/30/2023)",
          "pdf.metadata._metadata.pdf:producer":
            "Acrobat Distiller 22.0 (Windows)",
          "pdf.metadata._metadata.xmp:createdate": "2023-06-29T16:20:42-04:00",
          "pdf.metadata._metadata.xmp:creatortool":
            "PScript5.dll Version 5.2.2",
          "pdf.metadata._metadata.xmp:metadatadate":
            "2023-06-29T16:22:24-04:00",
          "pdf.metadata._metadata.xmp:modifydate": "2023-06-29T16:22:24-04:00",
          "pdf.metadata._metadata.xmpmm:documentid":
            "uuid:dc49c1da-fcce-40a8-8f3a-1df270d191b7",
          "pdf.metadata._metadata.xmpmm:instanceid":
            "uuid:9cbcff74-7047-4c4c-9efd-4c601fa48201",
          "pdf.totalPages": 70,
          "pdf.version": "1.10.100",
          source: "/Users/mikemklee/dev/tldr/docs/court-case-example.pdf",
        },
      },
      {
        pageContent:
          "24 303 CREATIVE LLC v. ELENIS \nOpinion of the Court \nfilm with a Zionist message,” they could compel “an atheist \nmuralist  to  accept  a  commission  celebrating  Evangelical\nzeal,” and they could require a gay website designer to cre-\nate websites for a group advocating against same-sex mar-\nriage, so long as these speakers would accept commissions\nfrom the public with different messages.  6 F. 4th, at 1199 \n(dissenting opinion).  Perhaps the dissent finds these possi-\nbilities untroubling because it trusts state governments to \ncoerce only “enlightened” speech. But if that is the calcula-\ntion, it is a dangerous one indeed.\n7 \nThe  dissent  is  right  about  one  thing—“[w]hat  a  differ-\nence”  time  can  make.    See  post,  at  2  (internal  quotation\nmarks  omitted).   Eighty  years  ago  in  Barnette,  this  Court  \naffirmed that “no official, high or petty, can prescribe what",
        metadata: {
          "loc.lines.from": 22,
          "loc.lines.to": 38,
          "loc.pageNumber": 30,
          "pdf.info.CreationDate": "D:20230629162042-04'00'",
          "pdf.info.Creator": "PScript5.dll Version 5.2.2",
          "pdf.info.IsAcroFormPresent": false,
          "pdf.info.IsXFAPresent": false,
          "pdf.info.ModDate": "D:20230629162224-04'00'",
          "pdf.info.PDFFormatVersion": "1.6",
          "pdf.info.Producer": "Acrobat Distiller 22.0 (Windows)",
          "pdf.info.Title": "21-476 303 Creative LLC v. Elenis (06/30/2023)",
          "pdf.metadata._metadata.dc:creator": "",
          "pdf.metadata._metadata.dc:format": "application/pdf",
          "pdf.metadata._metadata.dc:title":
            "21-476 303 Creative LLC v. Elenis (06/30/2023)",
          "pdf.metadata._metadata.pdf:producer":
            "Acrobat Distiller 22.0 (Windows)",
          "pdf.metadata._metadata.xmp:createdate": "2023-06-29T16:20:42-04:00",
          "pdf.metadata._metadata.xmp:creatortool":
            "PScript5.dll Version 5.2.2",
          "pdf.metadata._metadata.xmp:metadatadate":
            "2023-06-29T16:22:24-04:00",
          "pdf.metadata._metadata.xmp:modifydate": "2023-06-29T16:22:24-04:00",
          "pdf.metadata._metadata.xmpmm:documentid":
            "uuid:dc49c1da-fcce-40a8-8f3a-1df270d191b7",
          "pdf.metadata._metadata.xmpmm:instanceid":
            "uuid:9cbcff74-7047-4c4c-9efd-4c601fa48201",
          "pdf.totalPages": 70,
          "pdf.version": "1.10.100",
          source: "/Users/mikemklee/dev/tldr/docs/court-case-example.pdf",
        },
      },
    ],
  },
] as Message[];
