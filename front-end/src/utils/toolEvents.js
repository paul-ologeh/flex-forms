import cloneDeep from "lodash/cloneDeep";

export const onToolClick = (toolId, toolStore, updateToolStore) => {
  console.debug("clicked ", toolId);
  let oldToolStore = cloneDeep(toolStore);
  oldToolStore.selectedTool = toolId;
  updateToolStore(oldToolStore);
};

export const onToolDragStop = (
  toolId,
  position,
  toolStore,
  updateToolStore
) => {
  // Update X & Y position of the tool in the tool store
  console.debug(toolId, `moved to X:${position.x} Y:${position.y}`);
  let oldToolStore = cloneDeep(toolStore);
  let allToolProps = oldToolStore.allToolProps;
  for (let i = 0; i < allToolProps.length; i++) {
    if (allToolProps[i].toolId === toolId) {
      allToolProps[i].x = position.x;
      allToolProps[i].y = position.y;
      oldToolStore.allToolProps = allToolProps;
      updateToolStore(oldToolStore);
      break;
    }
  }
};

export const onToolKeyDown = (toolId, toolStore, updateToolStore) => {
  let oldToolStore = cloneDeep(toolStore);
  oldToolStore.allToolProps = oldToolStore.allToolProps.filter(
    (obj) => obj.toolId !== toolId
  );
  oldToolStore.allTools = oldToolStore.allTools.filter(
    (obj) => obj.key !== `${toolId}`
  );

  updateToolStore(oldToolStore);
  console.debug(toolId, `deleted ${toolId} from store ${oldToolStore}`);
};
