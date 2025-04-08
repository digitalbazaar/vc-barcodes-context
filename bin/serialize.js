#!/usr/bin/env node
/*!
 * Copyright (c) 2023-2025 Digital Bazaar, Inc. All rights reserved.
 */
import fs from 'node:fs';
import {metadata} from '../lib/index.js';

// Serialize the contexts as JSON-LD
for(const {fileUrl, context} of metadata.values()) {
  fs.writeFileSync(fileUrl, JSON.stringify(context, null, 2) + '\n');
}
