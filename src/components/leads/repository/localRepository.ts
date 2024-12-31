class LeadsRepository {
  private leads: any[];

  constructor() {
    this.leads = [{
      "id": 1,
      "firstName": "Marylynne",
      "lastName": "Havoc",
      "email": "mhavoc0@so-net.ne.jp",
      "phone": "495-740-7630"
    }, {
      "id": 2,
      "firstName": "Barnard",
      "lastName": "De Leek",
      "email": "bdeleek1@cyberchimps.com",
      "phone": "336-446-1325"
    }, {
      "id": 3,
      "firstName": "Nina",
      "lastName": "Arrighetti",
      "email": "narrighetti2@answers.com",
      "phone": "615-802-5458"
    }, {
      "id": 4,
      "firstName": "Hieronymus",
      "lastName": "Chevers",
      "email": "hchevers3@flavors.me",
      "phone": "624-603-5038"
    }, {
      "id": 5,
      "firstName": "Lorene",
      "lastName": "Hasard",
      "email": "lhasard4@baidu.com",
      "phone": "720-740-4014"
    }, {
      "id": 6,
      "firstName": "Eduardo",
      "lastName": "Dinsale",
      "email": "edinsale5@si.edu",
      "phone": "931-459-4222"
    }, {
      "id": 7,
      "firstName": "Jackquelin",
      "lastName": "Brownscombe",
      "email": "jbrownscombe6@topsy.com",
      "phone": "323-394-5658"
    }, {
      "id": 8,
      "firstName": "Roda",
      "lastName": "Eldin",
      "email": "reldin7@woothemes.com",
      "phone": "200-560-2328"
    }, {
      "id": 9,
      "firstName": "Amber",
      "lastName": "Neill",
      "email": "aneill8@artisteer.com",
      "phone": "990-917-2031"
    }, {
      "id": 10,
      "firstName": "Kyla",
      "lastName": "Garrick",
      "email": "kgarrick9@census.gov",
      "phone": "118-481-1671"
    }, {
      "id": 11,
      "firstName": "Evan",
      "lastName": "Cliffe",
      "email": "ecliffea@about.com",
      "phone": "774-898-0879"
    }, {
      "id": 12,
      "firstName": "Hieronymus",
      "lastName": "McArt",
      "email": "hmcartb@census.gov",
      "phone": "398-695-6595"
    }, {
      "id": 13,
      "firstName": "Wain",
      "lastName": "Eastmead",
      "email": "weastmeadc@engadget.com",
      "phone": "485-128-2624"
    }, {
      "id": 14,
      "firstName": "Jere",
      "lastName": "Tibbotts",
      "email": "jtibbottsd@netscape.com",
      "phone": "709-945-1477"
    }, {
      "id": 15,
      "firstName": "Delly",
      "lastName": "D'Souza",
      "email": "ddsouzae@abc.net.au",
      "phone": "861-962-7297"
    }, {
      "id": 16,
      "firstName": "Juline",
      "lastName": "Dunnan",
      "email": "jdunnanf@posterous.com",
      "phone": "462-254-1955"
    }, {
      "id": 17,
      "firstName": "Bonnibelle",
      "lastName": "Ballinghall",
      "email": "bballinghallg@usgs.gov",
      "phone": "332-245-7292"
    }, {
      "id": 18,
      "firstName": "Barn",
      "lastName": "Bedford",
      "email": "bbedfordh@marketwatch.com",
      "phone": "423-279-9678"
    }, {
      "id": 19,
      "firstName": "Quentin",
      "lastName": "Reinbeck",
      "email": "qreinbecki@biblegateway.com",
      "phone": "926-783-5387"
    }, {
      "id": 20,
      "firstName": "Niko",
      "lastName": "Cyples",
      "email": "ncyplesj@ucla.edu",
      "phone": "872-346-1510"
    }, {
      "id": 21,
      "firstName": "Laughton",
      "lastName": "Scade",
      "email": "lscadek@bravesites.com",
      "phone": "233-507-4093"
    }, {
      "id": 22,
      "firstName": "Jeanette",
      "lastName": "Ragg",
      "email": "jraggl@odnoklassniki.ru",
      "phone": "619-316-0754"
    }, {
      "id": 23,
      "firstName": "Lorenza",
      "lastName": "Tofanini",
      "email": "ltofaninim@discovery.com",
      "phone": "251-798-3191"
    }, {
      "id": 24,
      "firstName": "Thorpe",
      "lastName": "Bowick",
      "email": "tbowickn@jimdo.com",
      "phone": "248-945-2928"
    }, {
      "id": 25,
      "firstName": "Lazar",
      "lastName": "Paffitt",
      "email": "lpaffitto@aol.com",
      "phone": "281-876-4356"
    }, {
      "id": 26,
      "firstName": "Titos",
      "lastName": "Wollard",
      "email": "twollardp@mit.edu",
      "phone": "751-453-7383"
    }, {
      "id": 27,
      "firstName": "Stormy",
      "lastName": "Stepto",
      "email": "ssteptoq@auda.org.au",
      "phone": "145-316-0829"
    }, {
      "id": 28,
      "firstName": "Tonye",
      "lastName": "Kensy",
      "email": "tkensyr@ustream.tv",
      "phone": "995-670-1590"
    }, {
      "id": 29,
      "firstName": "Alisa",
      "lastName": "Caesman",
      "email": "acaesmans@spotify.com",
      "phone": "408-545-7093"
    }, {
      "id": 30,
      "firstName": "Erena",
      "lastName": "Simoncelli",
      "email": "esimoncellit@vinaora.com",
      "phone": "517-874-8505"
    }];
  }

  saveLead(leadData: any) {
    const newLead = { id: this.leads.length + 1, ...leadData };
    this.leads.push(newLead);
    return newLead;
  }

  findAllLeads() {
    return this.leads;
  }

  findLeadById(id: string) {
    return this.leads.find(lead => lead.id === parseInt(id));
  }

  updateLead(id: string, leadData: any) {
    const index = this.leads.findIndex(lead => lead.id === parseInt(id));
    if (index !== -1) {
      this.leads[index] = { ...this.leads[index], ...leadData };
      return this.leads[index];
    }
    return null;
  }

  deleteLead(id: string) {
    const index = this.leads.findIndex(lead => lead.id === parseInt(id));
    if (index !== -1) {
      this.leads.splice(index, 1);
      return true;
    }
    return false;
  }
}

export default LeadsRepository;