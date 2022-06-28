const projects = [
  {
    "id": 1,
    "postal": "120321",
    "address": "321 Clementi Ave 5",
    "profile": "https://django-inspection-images.s3.amazonaws.com/321%20Clementi%20Ave%205/profile/clementi_profile.jpg?AWSAccessKeyId=AKIA3Z4H2WTHWVEXEA4C&Signature=gnTtTLrvJW7V0E9j7AfbWPN5Gso%3D&Expires=1656855870",
    "created_at": "2020-05-27T16:35:00.756000+08:00",
    "user": [
      1,
      4,
      9
    ],
    "buildingStatus": "Completed",
    "repairStatus": "New",
    "last_inspected": "None",
    "owner": "Housing Development Board (HDB)",
    "buildingType": "HDB Apartment",
    "constructionYear": "1977",
    "structureMaterial": "Reinforced concrete, Masonry",
    "professionalEngineer": "None",
    "facade_plan": null,
    "heightAdjustment": "0.0000"
  },
  {
    "id": 2,
    "postal": "140063",
    "address": "63 Commonwealth Drive",
    "profile": "https://django-inspection-images.s3.amazonaws.com/63%20Commonwealth%20Drive/profile/commonwealth_profile.jpg?AWSAccessKeyId=AKIA3Z4H2WTHWVEXEA4C&Signature=70U5iBO8rAacI40irhifaA0VWpw%3D&Expires=1656855870",
    "created_at": "2020-07-28T21:49:46.163000+08:00",
    "user": [
      4
    ],
    "buildingStatus": "New",
    "repairStatus": "New",
    "last_inspected": "28-2-2021",
    "owner": "Housing Development Board",
    "buildingType": "HDB",
    "constructionYear": "1969",
    "structureMaterial": "None",
    "professionalEngineer": "None",
    "facade_plan": null,
    "heightAdjustment": "0.0000"
  },
  {
    "id": 3,
    "postal": "540136",
    "address": "TESTING",
    "profile": "https://django-inspection-images.s3.amazonaws.com/TESTING/profile/clementi_profile.jpg?AWSAccessKeyId=AKIA3Z4H2WTHWVEXEA4C&Signature=SGomfjDutJDmP1eg83%2BT1BgEk9o%3D&Expires=1656855870",
    "created_at": "2020-08-17T11:21:28.454000+08:00",
    "user": [
      1,
      4,
      6,
      8,
      9
    ],
    "buildingStatus": "Ongoing",
    "repairStatus": "Ongoing",
    "last_inspected": "28-2-2021",
    "owner": "Edwin (HDB)",
    "buildingType": "EC",
    "constructionYear": "2020",
    "structureMaterial": "Sticks",
    "professionalEngineer": "Professional Engineer (Company A)",
    "facade_plan": "https://django-inspection-images.s3.amazonaws.com/TESTING/facade_plan/Testing_facade_plan.jpeg?AWSAccessKeyId=AKIA3Z4H2WTHWVEXEA4C&Signature=MP9FRm7lo8%2FskbOe1dNpkj4NUYo%3D&Expires=1656855870",
    "heightAdjustment": "0.0000"
  },
  {
    "id": 10,
    "postal": "000003",
    "address": "DEMO 1 - 288G Bukit Batok Street 25",
    "profile": "https://django-inspection-images.s3.amazonaws.com/DEMO%201%20-%20288G%20Bukit%20Batok%20Street%2025/profile/Snapshot_1.jpg?AWSAccessKeyId=AKIA3Z4H2WTHWVEXEA4C&Signature=QuaAVamo2fmMYhUn1hFVp6w8D4M%3D&Expires=1656855870",
    "created_at": "2021-08-16T15:26:07.144000+08:00",
    "user": [
      1,
      4,
      8,
      9,
      11
    ],
    "buildingStatus": "Ongoing",
    "repairStatus": "Completed",
    "last_inspected": "01-October-2021",
    "owner": "BCA",
    "buildingType": "HDB",
    "constructionYear": "1995",
    "structureMaterial": "Concrete",
    "professionalEngineer": "None",
    "facade_plan": "https://django-inspection-images.s3.amazonaws.com/DEMO%201%20-%20288G%20Bukit%20Batok%20Street%2025/facade_plan/facade_numbers.jpg?AWSAccessKeyId=AKIA3Z4H2WTHWVEXEA4C&Signature=5A5kikbMoBMvk5mE9Pg6w78viTg%3D&Expires=1656855870",
    "heightAdjustment": "-12.2000"
  },
  {
    "id": 11,
    "postal": "000004",
    "address": "DEMO Test 1 - 288G Bukit Batok Street 25",
    "profile": "https://django-inspection-images.s3.amazonaws.com/DEMO%20Test%201%20-%20288G%20Bukit%20Batok%20Street%2025/profile/Snapshot_1.jpg?AWSAccessKeyId=AKIA3Z4H2WTHWVEXEA4C&Signature=Hrw10C2DUk1j5c9EYXpFLseb%2Fig%3D&Expires=1656855870",
    "created_at": "2021-08-23T14:37:06.606000+08:00",
    "user": [
      1,
      4,
      8,
      9,
      10
    ],
    "buildingStatus": "New",
    "repairStatus": "New",
    "last_inspected": "None",
    "owner": "Testing",
    "buildingType": "HDB",
    "constructionYear": "1994",
    "structureMaterial": "Concrete",
    "professionalEngineer": "None",
    "facade_plan": "https://django-inspection-images.s3.amazonaws.com/DEMO%20Test%201%20-%20288G%20Bukit%20Batok%20Street%2025/facade_plan/facade_numbers.jpg?AWSAccessKeyId=AKIA3Z4H2WTHWVEXEA4C&Signature=BRrqwl9514A24xI3Y8ADLI656S8%3D&Expires=1656855870",
    "heightAdjustment": "-12.2000"
  },
  {
    "id": 12,
    "postal": "000005",
    "address": "(BCA DEMO) 288G Bukit Batok Street 25",
    "profile": "https://django-inspection-images.s3.amazonaws.com/%28BCA%20DEMO%29%20288G%20Bukit%20Batok%20Street%2025/profile/Snapshot_1.jpg?AWSAccessKeyId=AKIA3Z4H2WTHWVEXEA4C&Signature=J7LBL9zuHRrfChXnIe6FOlhoHls%3D&Expires=1656855870",
    "created_at": "2021-09-29T15:53:44.711000+08:00",
    "user": [
      1,
      4,
      8,
      9,
      10,
      11
    ],
    "buildingStatus": "Ongoing",
    "repairStatus": "New",
    "last_inspected": "None",
    "owner": "HDB",
    "buildingType": "HDB",
    "constructionYear": "1997",
    "structureMaterial": "Concrete",
    "professionalEngineer": "OneSmart",
    "facade_plan": "https://django-inspection-images.s3.amazonaws.com/%28BCA%20DEMO%29%20288G%20Bukit%20Batok%20Street%2025/facade_plan/facade_numbers.jpg?AWSAccessKeyId=AKIA3Z4H2WTHWVEXEA4C&Signature=h6ytqbEVyOgWcUr3kNxU5YXdTiE%3D&Expires=1656855870",
    "heightAdjustment": "-12.2000"
  }
];

export default projects;