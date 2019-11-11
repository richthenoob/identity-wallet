// Given a OA document and url, render it with webview
import React, { FunctionComponent } from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";

export interface Tab {
  id: string;
  label: string;
}

export interface TemplateTabsProps {
  tabs: Tab[];
  tabSelect: Function;
}

const TemplateTabs: FunctionComponent<TemplateTabsProps> = ({
  tabs,
  tabSelect
}: TemplateTabsProps) => {
  // Do not show when there is only one tab
  if (!tabs || tabs.length <= 1) return null;
  const renderedTabs = tabs.map(tab => (
    <TouchableWithoutFeedback
      onPress={(): void => tabSelect(tab.id)}
      key={tab.id}
    >
      <Text>{tab.label}</Text>
    </TouchableWithoutFeedback>
  ));
  return <View>{renderedTabs}</View>;
};

export default TemplateTabs;