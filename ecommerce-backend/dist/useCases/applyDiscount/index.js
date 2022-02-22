"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyDiscountController = void 0;
const ApplyDiscountController_1 = require("./ApplyDiscountController");
const discountRepository = DiscountRepository.getInstance();
const applyDiscountUseCase = new ApplyDiscountUseCase(discountRepository);
const applyDiscountController = new ApplyDiscountController_1.ApplyDiscountController(applyDiscountUseCase);
exports.applyDiscountController = applyDiscountController;
