"use strict";
// generateStructure.ts
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// import fs from "fs";
// import path from "path";
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
function getStructure(dir, depth = 0) {
    const files = fs.readdirSync(dir);
    let structure = "";
    files.forEach((file) => {
        const fullPath = path.join(dir, file);
        const isDirectory = fs.statSync(fullPath).isDirectory();
        structure += "  ".repeat(depth) + "|-- " + file + "\n";
        if (isDirectory) {
            structure += getStructure(fullPath, depth + 1);
        }
    });
    return structure;
}
// Run and save the output
const projectStructure = getStructure(process.cwd());
fs.writeFileSync("project-structure.txt", projectStructure);
console.log("✅ Project structure saved to project-structure.txt");
// Open package.json and remove "type": "module".
// npx tsc generateStructure.ts
// node generateStructure.js  
