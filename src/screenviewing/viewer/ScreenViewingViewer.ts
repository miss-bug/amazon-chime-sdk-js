// Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

export default interface ScreenViewingViewer {
  start(viewport: HTMLDivElement): void;

  stop(): void;

  resizeAndSync(): void;
}
