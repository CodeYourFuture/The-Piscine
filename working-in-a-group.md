# Working in a group

Before you begin a group project, agree your [ways of working](https://www.atlassian.com/practices). This will help you to work together effectively and efficiently. Read the ways of working below and discuss them with your team. If you have extra conditions, agree them now.

## Suggested Ways of Working

We recommend following these Ways of Working (at a minimum, feel free to add more) as we have found them to be effective across many project teams at CYF:

- Create a temporary Slack channel for your team. Use this channel and your class time for communication about the project management and the product development.
- Each team member must understand the requirements of a ticket before moving it from the Backlog to Ready. Make use of your class time to discuss the tickets as a team.
- Decide whether you are going to work on tickets individually or as a pair. You may work faster on your own but may understand more about the codebase as a pair. Remember that you are expected to be able to explain how parts of the codebase that you did not write work.
- Set up a GitHub repo (see [below](#set-up-the-repo)) that every team member has access to.
- Each feature must be reviewed by another member of your team. Set a branch protection rule (see [below](#on-the-branch-protection-settings)) on your main branch to enforce this.
- Each team member can pick up a new ticket only when their old ticket is in review. Work on one thing at a time.

## Set up the repo

- One person should fork this repo to their own GitHub account and name it `Piscine-Sprint-SPRINT_NUMBER-Project`
- That person should add the other team members as [collaborators to the repo](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository).
- Now someone else should make a copy of the [example planner](https://github.com/CodeYourFuture/The-Piscine/projects?query=is%3Aopen) and link it to your project repo.

### On the [branch protection](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/managing-a-branch-protection-rule) settings

Set the following:

**Require a pull request before merging.** When this is enabled, all commits must be made to a non-protected branch and submitted via a pull request before they can be merged into a branch that matches this rule.

**Require approvals: 1**. When this is enabled, pull requests targeting a matching branch require a number of approvals and no changes requested before they can be merged.
