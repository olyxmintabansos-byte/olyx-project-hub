import { useState, useMemo } from 'react';
import { Project, CategoryType, FilterState } from '../types/project';

export function useFilter(projects: Project[]) {
  const [filter, setFilter] = useState<FilterState>({
    searchQuery: '',
    category: 'All',
    filterDemoOnly: false,
  });

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Category filter
      if (filter.category !== 'All' && project.category !== filter.category) {
        return false;
      }

      // Demo only filter
      if (filter.filterDemoOnly && !project.hasDemo) {
        return false;
      }

      // Search query
      if (filter.searchQuery.trim() !== '') {
        const query = filter.searchQuery.toLowerCase();
        const matchName = project.name.toLowerCase().includes(query);
        const matchDesc = project.description.toLowerCase().includes(query);
        const matchTopic = project.topics.some((topic) =>
          topic.toLowerCase().includes(query)
        );
        return matchName || matchDesc || matchTopic;
      }

      return true;
    });
  }, [projects, filter]);

  const stats = useMemo(() => {
    const total = projects.length;
    const liveDemos = projects.filter((p) => p.hasDemo).length;
    return { total, liveDemos };
  }, [projects]);

  const setSearchQuery = (query: string) => {
    setFilter((prev) => ({ ...prev, searchQuery: query }));
  };

  const setCategory = (cat: CategoryType) => {
    setFilter((prev) => ({ ...prev, category: cat }));
  };

  const toggleDemoOnly = () => {
    setFilter((prev) => ({ ...prev, filterDemoOnly: !prev.filterDemoOnly }));
  };

  const resetFilter = () => {
    setFilter({
      searchQuery: '',
      category: 'All',
      filterDemoOnly: false,
    });
  };

  return {
    filter,
    filteredProjects,
    stats,
    setSearchQuery,
    setCategory,
    toggleDemoOnly,
    resetFilter,
  };
}
