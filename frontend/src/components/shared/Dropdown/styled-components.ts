/**
 * @license
 * Copyright 2018-2022 Streamlit Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import isPropValid from "@emotion/is-prop-valid"
import styled from "@emotion/styled"
import { StyledDropdownListItem } from "baseui/select"

export const StyledTruncateText = styled.span({
  // We only want it to to be truncated on desktop,
  // where we can use tooltips to show the whole content.
  // On mobile, we'll let it wrap
  [`@media (min-width: 768px)`]: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
})

export const ThemedStyledDropdownListItem = styled(StyledDropdownListItem, {
  shouldForwardProp: isPropValid,
})(({ theme, $isHighlighted }) => {
  const backgroundColor = theme.inSidebar
    ? theme.colors.bgColor
    : theme.colors.secondaryBg
  return {
    display: "flex",
    alignItems: "center",
    paddingTop: theme.spacing.none,
    paddingBottom: theme.spacing.none,
    background: $isHighlighted ? backgroundColor : undefined,
    // Override the default itemSize set on the component's JSX
    // on mobile, so we can make list items taller and scrollable
    [`@media (max-width: 768px)`]: {
      minHeight: "40px",
      height: "auto !important",
    },

    "&:hover, &:active, &:focus": {
      background: backgroundColor,
    },
  }
})
