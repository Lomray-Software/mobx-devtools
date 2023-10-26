import type { FCC } from '@lomray/client-helpers/interfaces/fc-with-children';
import type { MouseEvent } from 'react';
import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';

interface ICollapseContext {
  state: Record<string, boolean>;
  toggle: (e: MouseEvent<HTMLDivElement>) => void;
}

const CollapseContext = createContext<ICollapseContext>({
  state: {},
  toggle: () => undefined,
});

export const useRouterAnimationContext = () => useContext(CollapseContext);

export const CollapseContextProvider: FCC = ({ children }) => {
  const [state, setState] = useState<ICollapseContext['state']>({});

  const toggle: ICollapseContext['toggle'] = useCallback((e) => {
    const { id, defaultState } = e.currentTarget.dataset as { id: string; defaultState: string };

    setState((prevState) => {
      const isToggled =
        typeof prevState?.[id] === 'boolean' ? !prevState[id] : !JSON.parse(defaultState);

      return { ...prevState, [id]: isToggled };
    });
  }, []);

  const context = useMemo(() => ({ state, toggle }), [state, toggle]);

  return <CollapseContext.Provider value={context}>{children}</CollapseContext.Provider>;
};
