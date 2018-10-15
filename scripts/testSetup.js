import "jest-enzyme/lib";
import { sheet } from "emotion";
import serializer from "jest-glamor-react";
import * as emotion from "emotion";
import { createMatchers } from "jest-emotion";                                                        

expect.extend(createMatchers(emotion));
expect.addSnapshotSerializer(serializer(sheet));