// import { jest } from "@jest/globals";
// import "regenerator-runtime";
// import { postJoin } from "./src/controllers/globalController";
// import { mockRequest, mockResponse } from "jest-mock-req-res";

// describe("plz", () => {
//   const db = { userModel: jest.fn() };
//   const repository = { exists: jest.fn(), create: jest.fn() };
//   const jwt = { sign: jest.fn() };
//   jwt.sign.mockReturnValue("Token");
//   const req = mockRequest({
//     body: { id: "1234", password: "12345", passwordConfirm: "123456" },
//   });

//   db.userModel.mockReturnValue(repository);
//   repository.exists.mockReturnValue(Promise.resolve(true));

//   it("비밀번호 다시 확인하세요가 떠야 한다.", async () => {
//     expect(await postJoin()).toMatchObject({
//       ok: false,
//       error: "비밀번호를 다시 확인하세요",
//     });
//   });
// });
