import {
  Controller,
  Get,
  Post,
  UseInterceptors,
  UploadedFile,
  Param,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { writeFile } from "fs";

const RequiredKeys = [
  "Package",
  "Name",
  "Depends",
  "Suite",
  "Version",
  "Architecture",
  "Description",
  "Maintainer",
  "Author",
  "Section",
  "Depiction",
];

const session: any = {
  control: {},
};

@Controller("package")
export class PackageController {
  @Get()
  index() {
    return "Hello World";
  }

  @Post("upload/:type")
  @UseInterceptors(FileInterceptor("file"))
  uploadPackage(@UploadedFile() file, @Param("type") type) {
    switch (type) {
      case "control": {
        try {
          const ControlData: string = Buffer.from(file.buffer).toString();
          const lines = ControlData.split("\n");
          lines.map((line) => {
            let key = line.match(/(\w+)/)[1];
            key = key.replace(/^./, key[0].toLocaleLowerCase());

            const value = line.match(/\w+\:(.*)/)[1].trim();

            session._id = new Date().getTime();
            session.control[key] = value;
          });
          console.log(session);
        } catch (e) {
          console.log(e);
        }
        break;
      }
      case "deb": {
        writeFile("uploads/debs/" + file.originalname, file.buffer, () => {});
      }
    }
  }

  @Post("save")
  savePackage() {
    return {
      ...session,
    };
  }
}
